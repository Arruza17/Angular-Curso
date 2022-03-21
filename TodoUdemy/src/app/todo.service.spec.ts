import { LoggerService } from "./logger.service";
import { TODOS } from "./test-data/todo.db";
import { TodoService } from "./todo.service"

describe('TodoService', () => {
    const loggerService = jasmine.createSpyObj('LoggerService', ['log']);
    const todoService = new TodoService(loggerService);

    it('Debería de agregar una nueva tarea', () => {
        todoService.add({
            autor: 'PruebaAutor',
            titulo: 'PruebaTitulo',
            descripcion: 'PruebaDescripcion'
        });
        expect(todoService.todos.length).toBe(1, 'Deberiamos tener una única tarea');
        expect(todoService.todos[0].id).toBe(1, 'El id autoincremental debería ser 1')
        expect(todoService.autoIncrementId).toBe(2, 'El auto incremental debería de haber avanzado')
        expect(todoService.todos[0].titulo).toEqual('PruebaTitulo');
        expect(loggerService.log).toHaveBeenCalledTimes(1);

    });

    it('Debería de borrar una tarea', () => {
        todoService.todos = TODOS;
        todoService.delete(2);
        expect(todoService.todos.length).toBe(2, 'El número de tareas debería de ser 2')

    });
})