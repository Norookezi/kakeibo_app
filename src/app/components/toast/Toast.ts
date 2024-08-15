import { ToastInterface, ToastService } from "./toast.service";

export class Toast {
  private __title__?: string;
  private __duration__: number = 5000;
  private __id__: string;
  private __createdAt__: number = 0;
  private __isBaked__: boolean = false;
  private __type__?: "warning" | "success" | "info" | "error";
  public remain: number = 0;
  public isDone: boolean = false;
  
  private __checkBaked__() {
    if (this.__isBaked__) throw new Error("This toast has already been baked, can't use this method");
  }
  constructor(private toastService: ToastService) {
    this.__id__ = Date.now().toString() + "toast"
  }

  get warning(): Toast {
    this.__checkBaked__();
    this.__type__ = "warning"; 
    return this;
  }
  get success(): Toast {
    this.__checkBaked__();
    this.__type__ = "success"; 
    return this;
  }
  get info(): Toast {
    this.__checkBaked__();
    this.__type__ = "info"; 
    return this;
  }
  get error(): Toast {
    this.__checkBaked__();
    this.__type__ = "error"; 
    return this;
  }

  delete(): void {
    throw new Error("unimplemented");
  };

  setTitle(title: string): Toast {
    if (title.length > 100) {
      title = title.substring(0,97) + "...";
      console.warn("title too long, must be at most 100 characters\n", "title has been truncated\n", title);
    }

    this.__title__ = title;
    return this;
  }

  setDuration(duration: number): Toast {
    this.__duration__ = duration*1000;
    return this;
  }

  bake(): Toast {
    window.setTimeout(() => {
      this.isDone = true;
      window.setTimeout(() => {
        delete this.toastService.toastList[this.__id__]
      }, 1000);
    },this.__duration__);
    setInterval(() => {this.remain = this.remain = ((this.createdAt - Date.now()) * 100 / (this.createdAt - this.expiresAt))}, 10)
    this.__createdAt__ = Date.now()

    return this;
  }

  get id(): string {
    return this.__id__

  };
  
  get title(): string {
    return this.__title__!

  };
  
  get type(): "warning" | "success" | "info" | "error" {
    return this.__type__!
  };

  get createdAt(): number {
    return this.__createdAt__

  };
  
  get expiresAt(): number {
    return this.__createdAt__ + (this.__duration__)

  };
  
  get duration(): number {
    return this.__duration__

  };

  get isBaked(): boolean {
    return this.__isBaked__
  }
}