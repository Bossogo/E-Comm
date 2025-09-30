import TopBar from './TopBar';
import MainNav from './MainNav';
import Container from '../Container';

export default function Header() {
  return (
    <header>
      <Container>
        <TopBar />
        <MainNav />
      </Container>
    </header>
  );
}
