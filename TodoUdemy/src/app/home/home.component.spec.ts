import { DebugElement } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AppModule } from "../app.module";
import { HomeComponent } from "./home.component"

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let el: DebugElement;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        }).compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(HomeComponent);
                component = fixture.componentInstance;
                el = fixture.debugElement;
            })
    }));

    it('Debería de existir el componente', () => {
        expect(component).toBeTruthy();

    });

    it('Debería de agregar una tarea', fakeAsync(() => {
        setInputValue('.form-control.autor','pruebaAutor')
        setInputValue('.form-control.titulo','pruebaTitulo')//a
        setInputValue('.form-control.descripcion','pruebaDescripcion')
        const boton = el.query(By.css('.btn.btn-success'));
        boton.nativeElement.click();
        tick();
        fixture.detectChanges();

        const card = el.query(By.css('.card:first-child'));
        const titulo = card.query(By.css('.card-title'));
        const descripcion = card.query(By.css('.card-text'));

        expect(card).toBeTruthy('La card debería de existir');
        expect(titulo.nativeElement.textContent).toBe('pruebaTitulo');
        expect(descripcion.nativeElement.textContent).toBe('pruebaDescripcion');


    }));





    function setInputValue(selector: string, value: string){
        fixture.detectChanges();
        tick();

        const inputAutor = el.query(By.css(selector));
        inputAutor.nativeElement.value = value;
        inputAutor.nativeElement.dispatchEvent(new Event('input'));
        tick();
    }
})