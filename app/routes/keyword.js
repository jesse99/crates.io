import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    flashMessages: service(),

    model({ keyword_id }) {
        return this.store.find('keyword', keyword_id).catch(e => {
            if (e.errors.any(e => e.detail === 'Not Found')) {
                this.get('flashMessages').show(`Keyword '${keyword_id}' does not exist`);
            }
        });
    }
});
