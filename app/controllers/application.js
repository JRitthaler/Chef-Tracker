import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    makeUnavailable(chefname){
      Ember.set(chefname, 'cookingToday', false)
    },
    makeAvailable(chefname){
      Ember.set(chefname, 'cookingToday', true)
    }
  }
  });
