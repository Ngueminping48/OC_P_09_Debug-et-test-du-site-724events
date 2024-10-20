import { fireEvent, render, screen } from '@testing-library/react';
import Home from './index';

describe('When Form is created', () => {
  it('a list of fields card is displayed', async () => {
    render(<Home />);
    await screen.findByText('Email');
    await screen.findByText('Nom');
    await screen.findByText('Prénom');
    await screen.findByText('Personel / Entreprise');
  });

  describe('and a click is triggered on the submit button', () => {
    it('the success message is displayed', async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText('Envoyer'),
        new MouseEvent('click', {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText('En cours');
      await screen.findByText('Message envoyé !');
    });
  });
});

describe('When a page is created', () => {
  it('a list of events is displayed', () => {
    // to implement
  });
  it('a list a people is displayed', () => {
    // to implement
  });
  it('a footer is displayed', () => {
    // to implement
  });
  it('an event card, with the last event, is displayed', () => {
    // to implement
  });
});

describe('When a page is created', () => {

  // Test pour vérifier si une liste d'événements est affichée
  it('a list of events is displayed', async () => {
    render(<Home />);
    
    // Vérifie que plusieurs événements sont présents dans la page
    await screen.findByText('Conférence AVRIL 2024');
    await screen.findByText('Atelier de développement');
    await screen.findByText('Séminaire en ligne');
  });

  // Test pour vérifier si une liste de personnes est affichée
  it('a list of people is displayed', async () => {
    render(<Home />);

    // Vérifie que les noms de certaines personnes sont présents
    await screen.findByText('Jean-baptiste');
    await screen.findByText('Christine');
    await screen.findByText('Isabelle');
  });

  // Test pour vérifier si le footer est bien présent
  it('a footer is displayed', async () => {
    render(<Home />);
    
    // Vérifie que le texte ou les éléments du footer sont affichés
    await screen.findByText('contactez-nous');
    await screen.findByText('Notre derniére prestation');
  });

  // Test pour vérifier si la dernière carte d'événement est affichée
  it('an event card, with the last event, is displayed', async () => {
    render(<Home />);

    // Vérifie que l'événement le plus récent est affiché en premier
    const lastEvent = await screen.findByText('Conférence AVRIL 2024');
    expect(lastEvent).toBeInTheDocument();
  });

});

