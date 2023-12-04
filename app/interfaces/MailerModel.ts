import dotenv from 'dotenv'
dotenv.config()

/* @@ message model @@ */
interface MessageModel {    
    _to: string,
    _from: string,
    _subject: string,
    _text: string
}

export class MailMessage {

    constructor(msg: MessageModel) {
        this.to = msg._to
        this.from = msg._from
        this.subject = msg._subject
        this.text = msg._text
    }

    to: string
    from: string
    subject: string
    text: string
}
    

/* @@ trasport model @@ */
interface TrasporterModel {
    _service: string,
    _host?: string,
    _port?: number,
    auth: {
        _user: string,
        _pass: string
    },
    _secure?: boolean,
    _requireTLS?: boolean,
    _logger: boolean
    _debug: boolean
}

export class TrasporterConfig {

    constructor(config: TrasporterModel) {
        this.service = config._service        
        this.user = config.auth._user
        this.pass = config.auth._pass        
        this.logger = config._logger
        this.debug = config._debug
    }

    service: string    
    user: string
    pass: string    
    logger: boolean
    debug: boolean

}



