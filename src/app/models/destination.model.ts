export class Destination {
  private selected: boolean;
  nombre: string;
  imageUrl: string;
  constructor(nombre: string, url: string) {
    this.nombre = nombre;
    this.imageUrl = url;
  }
  isSelected(): boolean {
    return this.selected;
  }
  setSelected(state: boolean) {
    this.selected = state;
  }
}
