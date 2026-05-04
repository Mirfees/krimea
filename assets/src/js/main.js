import GraphTabs from 'graph-tabs';
import burger from './functions/burger.js';
document.addEventListener('DOMContentLoaded', async () => {
    const tabs = new GraphTabs('key-advantages');
    burger();
});
