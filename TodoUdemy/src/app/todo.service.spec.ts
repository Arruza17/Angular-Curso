import { TestBed } from "@angular/core/testing";
import { LoggerService } from "./logger.service";
import { TODOS } from "./test-data/todo.db";
import { TodoService } from "./todo.service"
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('TodoService', () => {

    let todoService: TodoService;
    let loggerSpy: any;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                TodoService,
                { provide: LoggerService, useValue: loggerSpy }
            ]
        })
        todoService = TestBed.inject(TodoService);
        httpTestingController = TestBed.inject(HttpTestingController);
    })

    it('Debería de agregar una nueva tarea', () => {
        todoService.add({
            autor: 'PruebaAutor',
            titulo: 'PruebaTitulo',
            descripcion: 'PruebaDescripcion'
        });
        expect(todoService.todos.length).toBe(1, 'Deberiamos tener una única tarea');
        expect(todoService.todos[0].id).toBe(1, 'El id autoincremental debería ser 1')
        expect(todoService.autoIncrementId).toBe(2, 'El auto incremental debería de haber avanzado')
        expect(todoService.todos[0].titulo).toEqual('PruebaTitulo$');
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);

    });

    it('Debería de borrar una tarea', () => {
        const todoBorrar = [...TODOS];
        todoService.todos = todoBorrar;
        todoService.delete(2);
        expect(todoService.todos.length).toBe(2, 'El número de tareas debería de ser 2')

    });

    it('Debería de recuperar todas las tareas', () => {
        todoService.getAll().subscribe(todos => {
            expect(todos).toBeTruthy('No existen las tareas')
            expect(todos.length).toBe(3,'')

            const todo = todos.find(item => item.id === 2);
            expect(todo.titulo).toEqual('Compra de mueble', 'El título debe ser el especificado en la pruebas');
        })
        let url: string = 'http://localhost:3000/api/todos/all'
        const req = httpTestingController.expectOne(url);
        expect(req.request.method).toBe('GET');
        req.flush(TODOS);
    })

    it('Debería de recuperar una única tarea', () => {
        todoService.getById(2).subscribe(tarea => {
            expect(tarea).toBeTruthy('La tarea deberia de existr');
            expect(tarea.id).toBe(2,'El id de la tarea debe ser 2')
        })
        const req = httpTestingController.expectOne('http://localhost:3000/api/todos/2');
        expect(req.request.method).toBe('GET');
        req.flush(TODOS[1]);
    });

    afterEach(() => {
        httpTestingController.verify();
    })
})