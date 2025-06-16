import {EventHandlerRequest, H3Event} from "h3";
export enum StatusCode {
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    INTERNAL_SERVICE = 500,
    FORBIDDEN = 403,
    ACCESS_DENIED = 401,
}

function codeMessageError(message:string,code:number){
    return { message,statusCode: code }
}



export function BadRequestException(event: H3Event<EventHandlerRequest>, message: string) {
    setResponseStatus(event, StatusCode.BAD_REQUEST)
    return codeMessageError(message,StatusCode.BAD_REQUEST);
}

export function NotFoundException(event: H3Event<EventHandlerRequest>, message: string) {
    setResponseStatus(event, StatusCode.NOT_FOUND)
    return codeMessageError(message,StatusCode.NOT_FOUND);
}

export function AccessDeniedException(event: H3Event<EventHandlerRequest>, message: string) {
    setResponseStatus(event,  StatusCode.ACCESS_DENIED)
    return codeMessageError(message,StatusCode.ACCESS_DENIED);
}
