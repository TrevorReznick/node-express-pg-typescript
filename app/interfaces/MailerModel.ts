interface MessageModel {    
    to: string,
    from: string,
    subject: string,
    text: string
}

export class MailMessage {

    constructor(msg: MessageModel) {
        this._to = msg.to
        this._from = msg.from
        this._subject = msg.subject
        this._text = msg.text
    }

    _to: string
    _from: string
    _subject: string
    _text: string

    public msg(): object {
        return {
            'to': this._to,
            'from': this._from,
            'subject': this._subject,
            'text': this._text
        }
    }
}




export interface TransportOptions {
    host: string,
    port: number,
    secure: boolean,
    auth: {
        user: string
        pass: string
    }
}