// Class criada para padronizar as mensagens de erro que podem ser retornadas pela API

export class AppError {
  message: string;

  constructor(message: string) {
    this.message = message;
  }
}