import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import CardGrid from './components/CardGrid';
import About from './components/About';
import Contact from './components/Contact';
import { cards, featuredCards } from './data/cards';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-inter">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <main>
                {/* Featured cards section */}
                <section className="pt-0 pb-12 sm:pb-16 lg:pb-20">
                  <div className="container-responsive">
                    <h2 className="section-heading">Featured Work</h2>
                    <CardGrid cards={featuredCards} featured={true} columns={3} />
                  </div>
                </section>
                
                {/* Professional Experience */}
                <section className="mb-12 sm:mb-16 lg:mb-20">
                  <div className="container-responsive">
                    <h2 className="section-heading">Professional Experience</h2>
                    <CardGrid 
                      cards={cards.filter(card => card.type === 'role')} 
                      columns="full"
                      layout="expanded"
                      collapsible={true}
                      initialVisibleCount={3}
                    />
                  </div>
                </section>

                {/* Skills & Projects */}
                <section className="mb-12 sm:mb-16 lg:mb-20">
                  <div className="container-responsive">
                    <h2 className="section-heading">Skills & Projects</h2>
                    <CardGrid 
                      cards={cards.filter(card => ['skill', 'project', 'tool'].includes(card.type))}
                      columns={3}
                    />
                  </div>
                </section>

                {/* Education & Recognition */}
                <section className="mb-12 sm:mb-16 lg:mb-20">
                  <div className="container-responsive">
                    <h2 className="section-heading">Education & Recognition</h2>
                    <CardGrid 
                      cards={cards.filter(card => card.type === 'award')}
                      columns={2}
                    />
                  </div>
                </section>
              </main>
              <About />
              <Contact />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;