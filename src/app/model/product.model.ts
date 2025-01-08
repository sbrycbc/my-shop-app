export class Product {
    constructor(
        public id?: number,
        public name?: string,
        public price?: number,
        public imageUrl?: string,
        public description?: string,
        public category?: string                //  " ? "Bir özelliğin isteğe bağlı (optional) olduğunu ifade eder. 
    ) {}
}