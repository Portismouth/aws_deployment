export class Pet {
    constructor(
        public id: number = null,
        public name: string = "",
        public type: string = "",
        public desc: string = "", 
        public skills = [],
        public likes: number = 0
    ) {}
}
