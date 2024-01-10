import Customer from './components/Customer';
import './App.css';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '김동수',
    'birthday': '950210',
    'gender': '남자',
    'job': '직장인'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '홍길동',
    'birthday': '110210',
    'gender': '남자',
    'job': '도사'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '이순신',
    'birthday': '961222',
    'gender': '남자',
    'job': '장수'
  },
]
function App() {
  return (
    <div>
      {customers.map(c => { return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birth={c.birth} gender={c.gender} job={c.job} />})}
    </div>
  );
}

export default App;
