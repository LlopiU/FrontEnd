export class Proyecto {
  id?: number;
  nombreP: string;
  descripcionP: string;
  imgP?: string;
  urlP?: string;

  constructor(
    nombreP: string,
    descripcionP: string,
    imgP: string,
    urlP: string,
  ) {
    this.nombreP = nombreP;
    this.descripcionP = descripcionP;
    this.imgP = imgP;
    this.urlP = urlP;
  }
}
