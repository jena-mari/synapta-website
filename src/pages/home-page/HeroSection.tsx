import Container from '../../app/components/layout/Container';
import Button from '../../app/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="pt-40 pb-32 relative overflow-hidden">
      <Container className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          From Cheat Code To <br />
          <span className="bg-gradient-to-r from-synaptaPurple to-synaptaBlue bg-clip-text text-transparent">
            Learning Amplifier
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-10">
          Synapta transforms AI from a shortcut into a reinforcement engine —
          engineered for mastery, not dependency.
        </p>

        <Button>Get Early Access</Button>
      </Container>
    </section>
  );
}