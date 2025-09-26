import TopBar from './TopBar';
import MainNav from './MainNav';
import Container from '../Container';

export default function Header() {
  return (
    <header>
      <Container>
        <TopBar />
        {/* <div className=' border-b-1 border-gray-200'></div> */}
        <MainNav />
      </Container>
    </header>
  );
}
