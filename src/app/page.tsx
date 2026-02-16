import Card from './components/Card';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center p-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Card Creation
        </h1>
        <p className="text-center text-gray-700 mb-6">
          Using Tailwind to create a card applying <span className="text-blue-600 font-semibold">Flex</span> concepts.
        </p>
        <Card />
      </div>
    </main>
  );
}
