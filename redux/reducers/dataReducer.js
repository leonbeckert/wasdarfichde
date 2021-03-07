import {
  SET_CONTENT_DATA_API,
  SET_CONTENT_DATA_QANDA,
  ADD_NEW_QANDA,
  EDIT_QANDA,
  ADD_CITY,
  SET_SEARCH_TERMS,
  ADD_NEW_QUESTION,
  ADD_NEW_ANSWER,
  INCREMENT_ANSWER_LIKE_COUNT,
  DECREMENT_ANSWER_LIKE_COUNT,
  SET_TWW_API_DATA,
  SET_RKI_API_DATA,
  SET_OPEN_CITY_ADD_THANK_YOU,
  SET_OPEN_CITY_ADD,
} from "../types";

const initialState = {
  content: {
    questions: [],
    answers: [],
  },
  twwapidata: {},
  toggleCityAdd: false,
  toggleThankYouCityAdd: false,
};

export default function Named(state = initialState, action) {
  function insertItem(array, index, item) {
    let newArray = array.slice();
    newArray.splice(index, 0, item);
    return newArray;
  }

  function removeItem(array, index) {
    let newArray = array.slice();
    newArray.splice(index, 1);
    return newArray;
  }
  switch (action.type) {
    case SET_CONTENT_DATA_API:
      return {
        ...state,
        content: {
          ...state.content,
          country: action.payload.contentData.country,
          state: action.payload.contentData.state,
          region: action.payload.contentData.region,
          city: action.payload.contentData.city,
          name: action.payload.contentData.name,
          // countryId: action.payload.contentData.countryId,
          // stateId: action.payload.contentData.stateId,
          selfId: action.payload.contentData.selfId,
          regions: action.payload.contentData.regions,
          states: action.payload.contentData.states,
          cities: action.payload.contentData.cities,
        },
      };

    case SET_CONTENT_DATA_QANDA:
      return {
        ...state,
        content: {
          ...state.content,
          questions: action.payload.contentData.questions,
          answers: action.payload.contentData.answers,
          sources: action.payload.contentData.sources,
          countryId: action.payload.contentData.countryId,
          stateId: action.payload.contentData.stateId,
          regionId: action.payload.contentData.regionId,
          cityId: action.payload.contentData.cityId,
        },
      };
    case SET_OPEN_CITY_ADD_THANK_YOU:
      return {
        ...state,
        toggleThankYouCityAdd: action.payload.bool,
      };
    case SET_OPEN_CITY_ADD:
      return {
        ...state,
        toggleCityAdd: action.payload.bool,
      };
    case ADD_NEW_QANDA:
      return {
        ...state,
        content: {
          questions: [
            ...state.content.questions,
            action.payload.newQAndA.question,
          ],
          answers: [...state.content.answers, action.payload.newQAndA.answer],
          latestUpdates: [
            ...state.content.latestUpdates,
            action.payload.newQAndA.latestUpdate,
          ],
          sources: [...state.content.sources, action.payload.newQAndA.source],
        },
      };
    case ADD_NEW_QUESTION:
      return {
        ...state,
        content: {
          ...state.content,
          questions: [...state.content.questions, action.payload.question],
          answers: [...state.content.answers],
        },
      };
    case ADD_NEW_ANSWER:
      return {
        ...state,
        content: {
          ...state.content,
          answers: [...state.content.answers, action.payload.answer],
          questions: [...state.content.questions],
        },
      };
    case EDIT_QANDA:
      return {
        ...state,
        content: {
          ...action.payload.editedQAndA,
        },
      };
    case ADD_CITY:
      return {
        ...state,
        content: {
          ...action.payload.newCity,
        },
      };
    case SET_SEARCH_TERMS:
      return {
        ...state,
        content: {
          cities: [...action.payload.cities],
          areacodes: [...action.payload.areacodes],
        },
      };
    case INCREMENT_ANSWER_LIKE_COUNT:
      let answers = state.content.answers;

      let index = answers
        .map((item) => item.answerId)
        .indexOf(action.payload.answerId);

      let item = {
        ...answers[index],
        likeCount: answers[index].likeCount + 1,
      };

      let newAnswers = removeItem(insertItem(answers, index, item), index + 1);
      newAnswers.sort((a, b) => {
        return b.likeCount - a.likeCount;
      });
      return {
        ...state,
        content: {
          ...state.content,
          answers: [...newAnswers],
        },
      };
    case DECREMENT_ANSWER_LIKE_COUNT:
      let answersRevoke = state.content.answers;

      let indexRevoke = answersRevoke
        .map((item) => item.answerId)
        .indexOf(action.payload.answerId);

      let itemRevoke = {
        ...answersRevoke[indexRevoke],
        likeCount: answersRevoke[indexRevoke].likeCount - 1,
      };

      let newAnswersRevoke = removeItem(
        insertItem(answersRevoke, indexRevoke, itemRevoke),
        indexRevoke + 1
      );
      newAnswersRevoke.sort((a, b) => {
        return b.likeCount - a.likeCount;
      });
      return {
        ...state,
        content: {
          ...state.content,
          answers: [...newAnswersRevoke],
        },
      };
    case SET_TWW_API_DATA:
      return {
        ...state,
        twwapidata: {
          alert: action.payload.twwapidata.alert,
          shortDescription: action.payload.twwapidata.shortDescription,
          importantLinks: action.payload.twwapidata.importantLinks,
          regionalRestrictions: action.payload.twwapidata.regionalRestrictions,
          general: action.payload.twwapidata.general,
          tourism: action.payload.twwapidata.tourism,
          lastRulesUpdate: action.payload.twwapidata.lastRulesUpdate,
        },
      };
    case SET_RKI_API_DATA:
      return {
        ...state,
        rkiapidata: {
          cases7per100k: action.payload.rkiapidata.cases7per100k,
          lastUpdate: action.payload.rkiapidata.lastUpdate,
        },
      };
    default:
      return state;
  }
}
