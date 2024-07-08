class Ok {
    constructor(body) {
        this.statusCode = 200;
        this.headers = { "Content-type": "application/json" };
        this.body = JSON.stringify(body);
        this.isBase64Encoded = false;
    }
}

class BadRequest extends Ok {
    constructor(body) {
        super(body);
        this.statusCode = 400;
    }
}

class InternalServerError extends Ok {
    constructor(error) {
        super({ message: error.message });
        this.statusCode = 500;
    }
}

exports.Ok = Ok;
exports.BadRequest = BadRequest;
exports.InternalServerError = InternalServerError;
