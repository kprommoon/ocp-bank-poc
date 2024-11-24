// src/pages/Home.tsx
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Benefits from '../components/home/Benefits';
import CallToAction from '../components/home/CallToAction';

const Home = () => (
  <Layout>
    <Hero />
    <Benefits />
    <CallToAction />
  </Layout>
);

export default Home;