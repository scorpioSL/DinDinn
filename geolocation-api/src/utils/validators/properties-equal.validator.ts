import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'EqualsTo' })
export class IsEqualsToConstraint implements ValidatorConstraintInterface {
    validate(value: number, args: ValidationArguments) {
        const filter = args.constraints.find((val) => {
            return val === value
        });
        return filter === value;
    }
}

export function IsEqualsTo(values: any[], validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: {...validationOptions,message:`${propertyName} value must be equal to one of the values from [${values}]`},
            constraints: values,
            validator: IsEqualsToConstraint,
        });
    };
}