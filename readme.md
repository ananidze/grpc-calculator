# gRPC Calculator Project

This project demonstrates a simple calculator application using gRPC with Python as the client and Node.js as the server. The calculator supports basic arithmetic operations such as addition, subtraction, multiplication, and division.

## Prerequisites

- Python (for the client)
- Node.js (for the server)
- Protocol Buffers compiler (`protoc`)

## Project Structure

```
grpc-calculator/
|-- README.md
|-- calculator.proto
|-- server/
| |-- index.js
|-- client/
| |-- app.py
| |-- calculator_pb2.py
| |-- calculator_pb2_grpc.py
```

## Installation

1. Clone the repository:

   ```bash
    git clone https://github.com/ananidze/grpc-calculator.git
    cd grpc-calculator
   ```

2. Install the dependencies for the client and server:

   ```bash
    cd client
    pip install -r requirements.txt

    cd server
    npm install
   ```

## Usage

1. Start the server:

   ```bash
    cd server
    node index.js
   ```

2. In a separate terminal, start the client:

   ```bash
    cd client
    python app.py
   ```

## gRPC Service

The gRPC service is defined in the `calculator.proto` file, encompassing the following operations:

- **Add**: Addition of two numbers.
- **Subtract**: Subtraction of two numbers.
- **Multiply**: Multiplication of two numbers.
- **Divide**: Division of two numbers.

### Message Types

- **Numbers**: Message containing two integers, `a` and `b`.
- **Result**: Message containing the result of the arithmetic operation.
