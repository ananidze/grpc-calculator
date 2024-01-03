import grpc
import calculator_pb2
import calculator_pb2_grpc

if __name__ == '__main__':
    channel = grpc.insecure_channel('localhost:50051')
    stub = calculator_pb2_grpc.CalculatorStub(channel)

    first: int = int(input('Enter first number: '))
    second: int = int(input('Enter second number: '))

    numbers = calculator_pb2.Numbers(a=first, b=second)

    add_response = stub.Add(numbers)
    print(f'Addition: {add_response.result}')

    sub_response = stub.Subtract(numbers)
    print(f'Subtraction: {sub_response.result}')

    mul_response = stub.Multiply(numbers)
    print(f'Multiplication: {mul_response.result}')

    div_response = stub.Divide(numbers)
    print(f'Division: {div_response.result}')

    
