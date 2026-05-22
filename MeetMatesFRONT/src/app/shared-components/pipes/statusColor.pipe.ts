// Angular
import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe de mapping de statut vers une classe CSS de couleur.
 *
 * Responsabilités :
 * - associer les statuts d’activité et de participation
 *   à une couleur cohérente dans l’UI
 *
 * Utilisé dans les composants d’événements et de profil.
 */
@Pipe({
  name: 'statusColor',
  standalone: true
})

export class StatusColorPipe implements PipeTransform {

  transform(label?: string | null): string {

    const value = label?.toLowerCase();

    switch (value) {

      case 'ouvert':
      case 'accepté':
        return 'status-success';

      case 'complet':
      case 'en attente':
        return 'status-warning';

      case 'annulé':
      case 'refusé':
        return 'status-error';

      case 'terminé':
        return 'status-neutral';

      default:
        return 'status-default';
    }
  }
}