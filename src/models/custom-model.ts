import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose'

@modelOptions({
    schemaOptions: {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    },
})
class TestClass {
    @prop({ required: true, unique: true })
    firstName!: string;

    @prop()
    lastName!: string;

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // You can call it with Test.getHelloWorld()
    static getHelloWorld() {
        return 'Hello World'
    }

    // @prop({ ref: 'Cat' })
    // public pet?: Ref<Cat>;
}

const Test = getModelForClass(TestClass)

export default Test;