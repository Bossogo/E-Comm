import TopBar from '../shared/Header/TopBar';
import MainNav from '../shared/Header/MainNav';
import AppLayout from './AppLayout';
import Container from '../shared/Container';
import Products from './Products';

export default function Index() {
  return (
    <>
      <Container>
        <TopBar />
              <MainNav />
              
      </Container>
      <Products />
    </>
  );
}
