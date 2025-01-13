
export type HttpResponse = {
    error: NotificacaoErro
}

export type NotificacaoErro = {
    sucesso: boolean,
    mensagem: string,
    erro: object
}
