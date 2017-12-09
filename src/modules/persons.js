import { createReducer, createAction } from 'redux-act'
import faker from 'faker'


export const deletePerson = createAction('@@persons/DELETE_PERSON');
export const updatePerson = createAction('@@persons/UPDATE_PERSON');
export const deletePersonNormalize = createAction('@@persons/DELETE_PERSON_NORMALIZE');
export const updatePersonNormalize = createAction('@@persons/UPDATE_PERSON_NORMALIZE');

const fetch = createAction('@@persons/FETCH');
const success = createAction('@@persons/SUCCESS');
const successNormalize = createAction('@@persons/SUCCESS_NORMALIZE');

const generateUsers = (count) => {
  const persons = []

  for (let i = 1; i <= count; i++) {
    const user = {
      id: i,
      name: faker.name.findName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
      bio: faker.lorem.sentence(),
      image: faker.image.avatar(),
    }
    persons.push(user)
  }

  return persons
}

export const fetchPersons = (count) => (dispatch) => {
  dispatch(fetch())
  return new Promise(resolve => {
    const persons = generateUsers(count)

    setTimeout(() => {
      resolve(persons)
    }, 1000)
  })
    .then((data) => {
      dispatch(success(data))
    })
}

export const fetchPersonsNormalize = (count) => (dispatch) => {
  dispatch(fetch())
  return new Promise(resolve => {
    const persons = generateUsers(count)

    setTimeout(() => {
      resolve(persons)
    }, 100)
  })
    .then((data) => {
      dispatch(successNormalize(data))
    })
}


const initialState = {
  items: [],
  ids: [],
  values: {},
};

const persons = createReducer({
  [fetch]: (state) => ({ ...state, isFetching: true }),
  [success]: (state, result) => ({
    ...state,
    isFetching: false,
    items: [
      ...state.items,
      ...result,
    ]
  }),
  [successNormalize]: (state, data) => {
    const ids = []
    const values = {}

    data.forEach((person) => {
      ids.push(person.id)
      values[person.id] = person
    })

    return {
      ...state,
      ids,
      values,
    }
  },
  [deletePerson]: (state, email) => {
    const currentPersonsToDelete = [...state.items];
    const indexToDelete = currentPersonsToDelete.findIndex((person) => person.email === email);
    return {
      items: [
        ...currentPersonsToDelete.slice(0, indexToDelete),
        ...currentPersonsToDelete.slice(indexToDelete + 1)
      ]
    }
  },
  [deletePersonNormalize]: (state, id) => {
    const newValues = {
      ...state.values,
    }

    delete newValues[id]

    return {
      ...state,
      values: {
        ...newValues
      },
      ids: [
        ...state.ids.filter((itemId) => itemId !== id)
      ]
    }
  },
  [updatePerson]: (state, person) => {
    const currentPersonsToUpdate = [...state.items];
    const indexToUpdate = currentPersonsToUpdate.findIndex((item) => item.email === person.email);

    const updatedPerson = {
      ...currentPersonsToUpdate[indexToUpdate],
      name: 'Changed person',
    };

    return {
      items: [
        ...currentPersonsToUpdate.slice(0, indexToUpdate),
        updatedPerson,
        ...currentPersonsToUpdate.slice(indexToUpdate + 1),
      ]
    }
  },
  [updatePersonNormalize]: (state, { id }) => {
    const person = state.values[id]

    return {
      ...state,
      values: {
        ...state.values,
        [id]: { ...person, name: 'Changed name' }
      }
    }
  }
}, initialState);

export default persons;
