import { ErroDeRegraDeNegocio, lancarSeInvalido } from './erros';
import { paraData } from './tipos';

export interface TambemTenhoProps {
  id?: number;
  usuarioId: number;
  perguntaId: number;
  criadoEm?: Date | string;
}

/**
 * Banco: UNIQUE(usuario_id, pergunta_id) — a garantia final contra voto duplicado.
 * A entity e o service validam antes, para devolver uma mensagem amigável.
 */
export class TambemTenho {
  private _id?: number | undefined;
  private _usuarioId: number;
  private _perguntaId: number;
  private _criadoEm: Date;

  constructor(p: TambemTenhoProps) {
    this._id = p.id;
    this._usuarioId = p.usuarioId;
    this._perguntaId = p.perguntaId;
    this._criadoEm = paraData(p.criadoEm) ?? new Date();
  }

  get id(): number | undefined { return this._id; }
  set id(v: number | undefined) { this._id = v; }
  get usuarioId(): number { return this._usuarioId; }
  get perguntaId(): number { return this._perguntaId; }
  get criadoEm(): Date { return this._criadoEm; }

  /** o autor não pode marcar a própria pergunta. */
  static criar(usuarioId: number, perguntaId: number, autorDaPerguntaId: number): TambemTenho {
    if (usuarioId === autorDaPerguntaId) {
      throw new ErroDeRegraDeNegocio('Você não pode marcar "também tenho essa dúvida" na própria pergunta.');
    }
    const marcacao = new TambemTenho({ usuarioId, perguntaId });
    marcacao.validar();
    return marcacao;
  }

  validar(): void {
    const erros: string[] = [];
    if (!this._usuarioId) erros.push('Usuário inválido.');
    if (!this._perguntaId) erros.push('Pergunta inválida.');
    lancarSeInvalido(erros);
  }

  static fromJSON(json: TambemTenhoProps): TambemTenho { return new TambemTenho(json); }
  toJSON() {
    return { id: this._id, usuarioId: this._usuarioId, perguntaId: this._perguntaId, criadoEm: this._criadoEm };
  }
}
