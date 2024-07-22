// export async function post(url: string, datas: { [key: string]: unknown }) {
//   const formData = new FormData();
//   Object.entries(datas).forEach(([key, value]) => {
//     if (typeof value === 'string') {
//       formData.append(key, value);
//     } else if (value instanceof Blob) {
//       formData.append(key, value);
//     } else {
//       console.warn(`Unexpected type for key "${key}" in FormData.append`);
//     }
//   });

//   const requestOptions: RequestInit = {
//     method: 'POST',
//     body: formData,
//     redirect: 'follow',
//   };

//   try {
//     const response = await fetch(url, requestOptions);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

class RequestException {
  __stack__?: string;
  __message__!: string | { [key: string]: unknown };

  private throwException(): {
    timestamp: string;
    stack: string | undefined;
    message: string | { [key: string]: unknown };
    status: string;
  } {
    const exceptionDetail: {
      timestamp: string;
      stack: string | undefined;
      message: string | { [key: string]: unknown };
      status: string;
    } = {
      timestamp: new Date().toTimeString().slice(0, 8),
      stack: this.__stack__,
      message: this.__message__,
      status: 'KO',
    };

    return exceptionDetail;
  }

  public set message(message: string | { [key: string]: unknown }) {
    this.__message__ = message;
  }

  constructor(body: string | { [key: string]: unknown } | undefined) {
    if (body != undefined) this.message = body;
    var err = new Error();

    this.__stack__ = err.stack;

    throw this.throwException();
  }
}

class Requests {
  private _method_?: 'GET' | 'POST' | 'PUT' | 'PATCH';

  private _fields_: { [key: string]: unknown } = {};

  private __url__?: string;

  public get GET(): Requests {
    this._method_ = 'GET';
    return this;
  }
  public get POST(): Requests {
    this._method_ = 'POST';
    return this;
  }
  public get PUT(): Requests {
    this._method_ = 'PUT';
    return this;
  }
  public get PATCH(): Requests {
    this._method_ = 'PATCH';
    return this;
  }

  public setField(field: { [key: string]: unknown }): Requests {
    this._fields_ = field;

    return this;
  }
  public addField(field: { [key: string]: unknown }): Requests {
    Object.entries(field).forEach(([key, value]) => {
      this._fields_[key] = value;
    });

    return this;
  }

  public url(url: string): Requests {
    this.__url__ = url;

    return this;
  }

  public async submit() {
    if (!this._method_) throw new RequestException('No method provided');

    if (!this.__url__) throw new RequestException('No url provided');

    if (Object.keys(this._fields_).length == 0)
      console.info("⚠️ You've sent a request without fields ⚠️");

    const option: RequestInit = this.makeOption();

    try {
      const response = await fetch(this.__url__, option);

      const result = await response.text();

      return result;
    } catch (error) {
      throw new RequestException(error as string);
    }
  }

  private makeOption(): RequestInit {
    const requestOptions: RequestInit = {
      method: this._method_,
      body: this.makeFormData(),
    };

    return requestOptions;
  }

  private makeFormData(): FormData {
    const formData = new FormData();
    Object.entries(this._fields_).forEach(([key, value]) => {
      if (typeof value === 'string') {
        formData.append(key, value);
      } else if (value instanceof Blob) {
        formData.append(key, value);
      } else {
        console.warn(`Unexpected type for key "${key}" in FormData.append`);
      }
    });
    return formData;
  }
}

export const request = new Requests();
