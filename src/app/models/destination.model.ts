export class Destination {
  private selected: boolean;
  public services: string[];
  nombre: string;
  imageUrl: string;
  constructor(nombre: string, url: string) {
    this.nombre = nombre;
    this.imageUrl = url;
    this.services = ['breakfast', 'pool'];
  }
  isSelected(): boolean {
    return this.selected;
  }
  setSelected(state: boolean) {
    this.selected = state;
  }
}
