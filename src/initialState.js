const initialState = {
  answers: {
    qty: 0,
    correct: 0,
    wrong: 0
  },
  questions: [
    {
      id: 'question-1',
      content: 'Musik',
      answers: [
        {
          id: 'answer-1',
          content: 'Die',
          correct: true
        },
        {
          id: 'answer-2',
          content: 'Der',
          correct: false
        },
        {
          id: 'answer-3',
          content: 'Das',
          correct: false
        }
      ]
    },
    {
      id: 'question-2',
      content: 'Reichstag',
      answers: [
        {
          id: 'answer-12',
          content: 'Die',
          correct: false
        },
        {
          id: 'answer-22',
          content: 'Der',
          correct: true
        },
        {
          id: 'answer-32',
          content: 'Das',
          correct: false
        }
      ]
    },
    {
      id: 'question-3',
      content: 'Tourist',
      answers: [
        {
          id: 'answer-13',
          content: 'Die',
          correct: false
        },
        {
          id: 'answer-23',
          content: 'Der',
          correct: true
        },
        {
          id: 'answer-33',
          content: 'Das',
          correct: false
        }
      ]
    },
    {
      id: 'question-4',
      content: 'Touristin',
      answers: [
        {
          id: 'answer-14',
          content: 'Die',
          correct: true
        },
        {
          id: 'answer-24',
          content: 'Der',
          correct: false
        },
        {
          id: 'answer-34',
          content: 'Das',
          correct: false
        }
      ]
    },
    {
      id: 'question-5',
      content: 'Touristen',
      answers: [
        {
          id: 'answer-15',
          content: 'Die',
          correct: true
        },
        {
          id: 'answer-25',
          content: 'Der',
          correct: false
        },
        {
          id: 'answer-35',
          content: 'Das',
          correct: false
        }
      ]
    },
    {
      id: 'question-6',
      content: 'Büro',
      answers: [
        {
          id: 'answer-16',
          content: 'Die',
          correct: false
        },
        {
          id: 'answer-26',
          content: 'Der',
          correct: false
        },
        {
          id: 'answer-36',
          content: 'Das',
          correct: true
        }
      ]
    },
    {
      id: 'question-7',
      content: 'Supermarkt',
      answers: [
        {
          id: 'answer-17',
          content: 'Die',
          correct: false
        },
        {
          id: 'answer-27',
          content: 'Der',
          correct: true
        },
        {
          id: 'answer-37',
          content: 'Das',
          correct: false
        }
      ]
    },
    {
      id: 'question-8',
      content: 'Telefon',
      answers: [
        {
          id: 'answer-18',
          content: 'Die',
          correct: false
        },
        {
          id: 'answer-28',
          content: 'Der',
          correct: false
        },
        {
          id: 'answer-38',
          content: 'Das',
          correct: true
        }
      ]
    },
    {
      id: 'question-9',
      content: 'Kurs',
      answers: [
        {
          id: 'answer-19',
          content: 'Die',
          correct: false
        },
        {
          id: 'answer-29',
          content: 'Der',
          correct: true
        },
        {
          id: 'answer-39',
          content: 'Das',
          correct: false
        }
      ]
    },
    {
      id: 'question-10',
      content: 'Rhein-Main-Flughafen',
      answers: [
        {
          id: 'answer-110',
          content: 'Die',
          correct: false
        },
        {
          id: 'answer-210',
          content: 'Der',
          correct: true
        },
        {
          id: 'answer-310',
          content: 'Das',
          correct: false
        }
      ]
    },
    {
      id: 'question-11',
      content: 'Kaffee',
      answers: [
        {
          id: 'answer-111',
          content: 'Die',
          correct: false
        },
        {
          id: 'answer-211',
          content: 'Der',
          correct: true
        },
        {
          id: 'answer-311',
          content: 'Das',
          correct: false
        }
      ]
    },
    {
      id: 'question-12',
      content: 'Computer',
      answers: [
        {
          id: 'answer-112',
          content: 'Die',
          correct: false
        },
        {
          id: 'answer-212',
          content: 'Der',
          correct: true
        },
        {
          id: 'answer-312',
          content: 'Das',
          correct: false
        }
      ]
    },
    {
      id: 'question-13',
      content: 'Cafeteria',
      answers: [
        {
          id: 'answer-113',
          content: 'Die',
          correct: true
        },
        {
          id: 'answer-213',
          content: 'Der',
          correct: false
        },
        {
          id: 'answer-313',
          content: 'Das',
          correct: false
        }
      ]
    },
    {
      id: 'question-14',
      content: 'Oper',
      answers: [
        {
          id: 'answer-114',
          content: 'Die',
          correct: true
        },
        {
          id: 'answer-214',
          content: 'Der',
          correct: false
        },
        {
          id: 'answer-314',
          content: 'Das',
          correct: false
        }
      ]
    },
    {
      id: 'question-15',
      content: 'Espresso',
      answers: [
        {
          id: 'answer-115',
          content: 'Die',
          correct: true
        },
        {
          id: 'answer-215',
          content: 'Der',
          correct: false
        },
        {
          id: 'answer-315',
          content: 'Das',
          correct: false
        }
      ]
    },
    {
      id: 'question-16',
      content: 'Airbus',
      answers: [
        {
          id: 'answer-116',
          content: 'Die',
          correct: false
        },
        {
          id: 'answer-216',
          content: 'Der',
          correct: true
        },
        {
          id: 'answer-316',
          content: 'Das',
          correct: false
        }
      ]
    },
    {
      id: 'question-17',
      content: 'Euro',
      answers: [
        {
          id: 'answer-117',
          content: 'Die',
          correct: false
        },
        {
          id: 'answer-217',
          content: 'Der',
          correct: true
        },
        {
          id: 'answer-317',
          content: 'Das',
          correct: false
        }
      ]
    },
    {
      id: 'question-18',
      content: 'Orchester',
      answers: [
        {
          id: 'answer-118',
          content: 'Die',
          correct: false
        },
        {
          id: 'answer-218',
          content: 'Der',
          correct: false
        },
        {
          id: 'answer-318',
          content: 'Das',
          correct: true
        }
      ]
    },
    {
      id: 'question-19',
      content: 'Schule',
      answers: [
        {
          id: 'answer-1',
          content: 'Die',
          correct: true
        },
        {
          id: 'answer-2',
          content: 'Der',
          correct: false
        },
        {
          id: 'answer-3',
          content: 'Das',
          correct: false
        }
      ]
    }
  ]
}

export default initialState;
