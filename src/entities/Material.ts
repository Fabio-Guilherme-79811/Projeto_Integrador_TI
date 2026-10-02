import { lancarSeInvalido } from "./erros";

export interface MaterialProps {
    id?: number | undefined;
    nome: string
}

export class Materia {
    private _id: number | undefined;
    private _nome: string;

    constructor(p: MaterialProps){
        this._id = p.id;
        this._nome = (p.nome ??'').trim();
    }

    get id(): number | undefined { return this._id;}
    set id(v: number | undefined) { this._id = v;}
    get nome(): string { return this._nome;}
    set nome(v: string) { this._nome = (v ?? '').trim();}

    validar(): void {
        const erros: string[] = [];
        if (this._nome.length < 2 || this._nome.length > 60 ) {
            erros.push('O nome da matéria deve ter entre 2 a 60 caracteres.')
        }
        lancarSeInvalido(erros);
    }

    static fromJSON(json: MaterialProps): Materia {return new Materia(json); }
    toJSON(): MaterialProps {return {id: this._id, nome: this._nome}; }
}