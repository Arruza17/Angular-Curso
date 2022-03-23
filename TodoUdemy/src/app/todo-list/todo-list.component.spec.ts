import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AppModule } from "../app.module";
import { TODOS } from "../test-data/todo.db";
import { TodoListComponent } from "./todo-list.component"

describe('TodoListComponent', () => {

    let component: TodoListComponent;
    let fixture: ComponentFixture<TodoListComponent>;
    let el: DebugElement;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(TodoListComponent);
            component = fixture.componentInstance;
            el = fixture.debugElement;
        });
    }));

    it('Debería de existir el componente', () => {
        expect(component).toBeTruthy();
        console.log(component)
    });

    it('Debería de mostrar la lista de tareas', () => {
        component.todos = TODOS;
        fixture.detectChanges();

        const cards = el.queryAll(By.css('.card'));

        expect(cards).toBeTruthy('No se pueden recuperar las cards')
        expect(cards.length).toBe(3, 'Deberían ser 3 cards');

    });

    it('Debería de mostrar la primera tarea', () => {
        component.todos = TODOS;
        fixture.detectChanges();

        const todo = TODOS[0];

        const card = el.query(By.css('.card:first-child'));
        const titulo = card.query(By.css('.card-title'));
        const descripcion = card.query(By.css('.card-text'));

        expect(card).toBeTruthy('La card debería de existir');
        expect(titulo.nativeElement.textContent).toBe(todo.titulo,'El título debe coincidir');
        expect(descripcion.nativeElement.textContent).toBe(todo.descripcion, 'La desripción debe coincidir');
    })

});