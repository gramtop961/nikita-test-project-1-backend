import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
}

const cars: Car[] = [
  { id: 1, make: 'Toyota', model: 'Camry', year: 2022, color: 'Silver', price: 28000 },
  { id: 2, make: 'Honda', model: 'Civic', year: 2023, color: 'Blue', price: 25000 },
  { id: 3, make: 'Ford', model: 'Mustang', year: 2021, color: 'Red', price: 35000 },
  { id: 4, make: 'BMW', model: '3 Series', year: 2023, color: 'Black', price: 45000 },
  { id: 5, make: 'Audi', model: 'A4', year: 2022, color: 'White', price: 42000 }
];

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.get('/cars', (req, res) => {
  res.json({
    success: true,
    data: cars,
    count: cars.length
  });
});

app.get('/nikita', (req, res) => {
  res.json({
    message: 'nikita'
  });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
}); 