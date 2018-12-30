const now = new Date()

export default {
  news: [
    {
      'id': '1',
      'title': 'Team Liquid gagne le Super Major',
      'author': 'darwyn',
      'avatar': 'centaur_hpover.jpg',
      'cover': 'img/backgrounds/background.jpg',
      'comment': 'A cat game',
      'date': '06/12/2017',
      'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'category': 'Dota 2'
    },
    {
      'id': '2',
      'title': 'Nouveau patch note',
      'author': 'darwyn',
      'avatar': 'chaos_knight_hpover.jpg',
      'cover': 'img/backgrounds/bg2.jpeg',
      'comment': 'A cat game',
      'date': '06/12/2017',
      'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'category': 'Dota 2'
    },
    {
      'id': '3',
      'title': 'Chroniques e-sportives : le grand reshuffle avant les qualifiers de TI8',
      'author': 'darwyn',
      'avatar': 'chen_hpover.jpg',
      'cover': 'img/backgrounds/bg3.jpeg',
      'comment': 'A cat game',
      'date': '06/12/2017',
      'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'category': 'Dota 2'
    },
    {
      'id': '4',
      'title': 'Nouveau patch note',
      'author': 'darwyn',
      'avatar': 'phantom_assassin_hpover.jpg',
      'cover': 'img/backgrounds/bg4.png',
      'comment': 'A cat game',
      'date': '06/12/2017',
      'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'category': 'Artifact'
    }
  ],
  schedule: [
    {
      'start': new Date(),
      'end': new Date(now.getTime() + (2 * 1000 * 60 * 60)),
      'name': 'Phil sur le Grill',
      'logo': 'img/emissions/philsurlegrill.png'
    },
    {
      'start': new Date(now.getTime() + (2 * 1000 * 60 * 60)),
      'end': new Date(now.getTime() + (5 * 1000 * 60 * 60)),
      'name': 'EZ+25'
    },
    {
      'start': new Date(now.getTime() + (5 * 1000 * 60 * 60)),
      'end': new Date(now.getTime() + (8 * 1000 * 60 * 60)),
      'name': 'Turbo Night',
      'logo': 'img/emissions/turbonight.png'
    }
  ],
  emissions: [
    {
      'id': '1',
      'title': 'AZZA',
      'desc': 'AZZA avec LuCiqNo et marSu',
      'component': 'azza',
      'cover': 'img/backgrounds/bg2.jpeg',
      'logo': 'img/emissions/allrandom.png'
    },
    {
      'id': '2',
      'title': 'Taymapute',
      'desc': 'Les défis d’un toulousain',
      'component': 'taymapute',
      'cover': 'img/backgrounds/bg3.jpeg',
      'logo': 'img/emissions/taymapute.png'
    },
    {
      'id': '3',
      'title': '20k mmr sous les mers',
      'desc': 'YouYou et v0ja en duo',
      'component': 'vingtkmmr',
      'cover': 'img/backgrounds/background.jpg',
      'logo': 'img/emissions/20kmmr.png'
    }
  ],
  azza: {
    'current': {
      'marsu': {
        'name': 'Warlock',
        'animated': 'img/heroes_animated/npc_dota_hero_warlock.webm',
        'portrait': 'img/heroes/warlock_hphover.webm'
      },
      'luciqno': {
        'name': 'Bane',
        'animated': 'img/heroes_animated/npc_dota_hero_bane.webm',
        'portrait': 'img/heroes/bane_hphover.webm'
      }
    },
    'next': {
      'marsu': {
        'name': 'Warlock',
        'animated': 'img/heroes/npc_dota_hero_warlock.webm',
        'portrait': 'img/heroes/warlock_hphover.png'
      },
      'luciqno': {
        'name': 'Bane',
        'animated': 'img/heroes/npc_dota_hero_bane.webm',
        'portrait': 'img/heroes/bane_hphover.png'
      }
    },
    'passed': [{
      'id': '0',
      'marsu': {
        'name': 'Warlock',
        'animated': 'img/heroes/npc_dota_hero_warlock.webm',
        'portrait': 'img/heroes/warlock_hphover.png'
      },
      'luciqno': {
        'name': 'Bane',
        'animated': 'img/heroes/npc_dota_hero_bane.webm',
        'portrait': 'img/heroes/bane_hphover.png'
      },
      'try_count': 6
    }, {
      'id': '1',
      'marsu': {
        'name': 'Warlock',
        'animated': 'img/heroes/npc_dota_hero_warlock.webm',
        'portrait': 'img/heroes/warlock_hphover.png'
      },
      'luciqno': {
        'name': 'Bane',
        'animated': 'img/heroes/npc_dota_hero_bane.webm',
        'portrait': 'img/heroes/bane_hphover.png'
      },
      'try_count': 3
    }, {
      'id': '2',
      'marsu': {
        'name': 'Warlock',
        'animated': 'img/heroes/npc_dota_hero_warlock.webm',
        'portrait': 'img/heroes/warlock_hphover.png'
      },
      'luciqno': {
        'name': 'Bane',
        'animated': 'img/heroes/npc_dota_hero_bane.webm',
        'portrait': 'img/heroes/bane_hphover.png'
      },
      'try_count': 1
    }]
  },
  taymapute: [{
    'author': 'marsu',
    'date': '15/06',
    'version': '7.07',
    'description': 'Mr ZipZap ! https://youtu.be/hB2YrJkZMis Faut ziper et faut zaper !!!',
    'hero': {
      'name': 'Storm Spirit',
      'portrait': 'img/heroes/storm_spirit_hphover.png'
    },
    'items': [{
      'name': 'Dagon 5',
      'image': 'img/items/dagon_5_lg.png'
    }, {
      'name': 'Eul’s Scepter',
      'image': 'img/items/cyclone_lg.png'
    }, {
      'name': 'Octarine Core',
      'image': 'img/items/octarine_core_lg.png'
    }, {
      'name': 'Bloodthorn',
      'image': 'img/items/bloodthorn_lg.png'
    }, {
      'name': 'Refresher Orb',
      'image': 'img/items/refresher_lg.png'
    }, {
      'name': 'Boots of Travel',
      'image': 'img/items/travel_boots_lg.png'
    }],
    'votes': {
      'up': 50,
      'down': 6
    }
  }, {
    'author': 'marsu',
    'date': '15/06',
    'version': '7.07',
    'description': 'Mr ZipZap ! https://youtu.be/hB2YrJkZMis Faut ziper et faut zaper !!!',
    'hero': {
      'name': 'Storm Spirit',
      'portrait': 'img/heroes/storm_spirit_hphover.png'
    },
    'items': [{
      'name': 'Dagon 5',
      'image': 'img/items/dagon_5_lg.png'
    }, {
      'name': 'Eul’s Scepter',
      'image': 'img/items/cyclone_lg.png'
    }, {
      'name': 'Octarine Core',
      'image': 'img/items/octarine_core_lg.png'
    }, {
      'name': 'Bloodthorn',
      'image': 'img/items/bloodthorn_lg.png'
    }, {
      'name': 'Refresher Orb',
      'image': 'img/items/refresher_lg.png'
    }, {
      'name': 'Boots of Travel',
      'image': 'img/items/travel_boots_lg.png'
    }],
    'votes': {
      'up': 50,
      'down': 6
    }
  }],
  vingtkmmr: [{
    'author': 'marsu',
    'date': '15/06',
    'version': '7.07',
    'description': 'Mr ZipZap ! https://youtu.be/hB2YrJkZMis Faut ziper et faut zaper !!!',
    'heroes': [{
      'name': 'Warlock',
      'animated': 'img/heroes/npc_dota_hero_warlock.webm',
      'portrait': 'img/heroes/warlock_hphover.png'
    }, {
      'name': 'Bane',
      'animated': 'img/heroes/npc_dota_hero_bane.webm',
      'portrait': 'img/heroes/bane_hphover.png'
    }],
    'votes': {
      'up': 50,
      'down': 6
    }
  }, {
    'author': 'marsu',
    'date': '15/06',
    'version': '7.07',
    'description': 'Mr ZipZap ! https://youtu.be/hB2YrJkZMis Faut ziper et faut zaper !!!',
    'heroes': [{
      'name': 'Warlock',
      'animated': 'img/heroes/npc_dota_hero_warlock.webm',
      'portrait': 'img/heroes/warlock_hphover.png'
    }, {
      'name': 'Bane',
      'animated': 'img/heroes/npc_dota_hero_bane.webm',
      'portrait': 'img/heroes/bane_hphover.png'
    }],
    'votes': {
      'up': 50,
      'down': 6
    }
  }, {
    'author': 'marsu',
    'date': '15/06',
    'version': '7.07',
    'description': 'Mr ZipZap ! https://youtu.be/hB2YrJkZMis Faut ziper et faut zaper !!!',
    'heroes': [{
      'name': 'Warlock',
      'animated': 'img/heroes/npc_dota_hero_warlock.webm',
      'portrait': 'img/heroes/warlock_hphover.png'
    }, {
      'name': 'Bane',
      'animated': 'img/heroes/npc_dota_hero_bane.webm',
      'portrait': 'img/heroes/bane_hphover.png'
    }],
    'votes': {
      'up': 50,
      'down': 6
    }
  }],
  league: {
    'divisions': [{
      'id': 0,
      'name': 'D1 - Roshan',
      'logo': 'path/to/logo',
      'admin': 'kainaabz',
      'cover': 'path/to/cover',
      'teams': [{
        'id': 0,
        'name': 'Fast & Furion',
        'logo': 'path/to/logo',
        'played': 5,
        'won': 5,
        'draw': 0,
        'lost': 0,
        'points': 5,
        'rank': 1
      }, {
        'id': 1,
        'name': 'Boom esport',
        'logo': 'path/to/logo',
        'played': 5,
        'won': 3,
        'draw': 1,
        'lost': 1,
        'points': 5,
        'rank': 2
      }]
    }, {
      'id': 1,
      'name': 'D2 - Roshan',
      'logo': 'path/to/logo',
      'admin': 'kainaabz',
      'cover': 'path/to/cover',
      'teams': [{
        'id': 1,
        'name': 'Fast & Furion',
        'logo': 'path/to/logo',
        'played': 5,
        'won': 5,
        'draw': 0,
        'lost': 0,
        'points': 5,
        'rank': 1
      }]
    }, {
      'id': 2,
      'name': 'D3 - Roshan',
      'logo': 'path/to/logo',
      'admin': 'kainaabz',
      'cover': 'path/to/cover',
      'teams': [{
        'id': 2,
        'name': 'Fast & Furion',
        'logo': 'path/to/logo',
        'played': 5,
        'won': 5,
        'draw': 0,
        'lost': 0,
        'points': 5,
        'rank': 1
      }]
    }, {
      'id': 3,
      'name': 'D4 - Roshan',
      'logo': 'path/to/logo',
      'admin': 'kainaabz',
      'cover': 'path/to/cover',
      'teams': [{
        'id': 3,
        'name': 'Fast & Furion',
        'logo': 'path/to/logo',
        'played': 5,
        'won': 5,
        'draw': 0,
        'lost': 0,
        'points': 5,
        'rank': 1
      }]
    }]
  }
}
