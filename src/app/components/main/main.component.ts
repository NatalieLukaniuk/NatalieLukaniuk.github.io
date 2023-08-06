import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  experienceItems = [
    {
      company: 'Deloitte',
      titles: [
        {
          position: 'Middle Frontend Developer',
          time: 'Sept 2022 - now',
        },
        {
          position: 'Junior Frontend Developer',
          time: 'July 2021 - Sept 2022',
        }
      ],
      projects: [
        {
          name: 'OneGPM',
          client: 'Germany',
          team: 'Ukraine/Portugal/Tunisia/Germany, 30+ people',
          stack: 'Angular, Angular Material, RxJs, AmCharts'
        },
        {
          name: 'Alchemy',
          client: 'Australia',
          team: 'Ukraine/Republic of South Africa, 7 people',
          stack: 'Angular, Angular Material, RxJs'
        },
        {
          name: 'Orchestration Hub',
          client: 'USA',
          team: 'Ukraine, 26 people',
          stack: 'Angular, Angular Material, NgRx, RxJs'
        },
        {
          name: 'SDA',
          client: 'Georgia',
          team: 'Ukraine/Russia, 5 people',
          stack: 'Angular, Angular Material'
        },
        {
          name: 'Econ',
          client: 'USA',
          team: 'Ukraine/India, 15 people',
          stack: 'Angular, Angular Material, NgRx, RxJs'
        }
      ]
    },
    {
      company: 'Best Apps',
      titles: [
        {
          position: 'Trainee Frontend Developer', time: 'October 2020 - May 2021',
        }
      ],
      projects: [
        {
          name: 'Bracket Fanatics',
          client: 'USA',
          team: 'Ukraine, 5 people',
          stack: 'Angular, Ionic'
        },
        {
          name: 'Bopredicta',
          client: 'USA',
          team: 'Ukraine, 5 people',
          stack: 'Angular, Ionic'
        },
        {
          name: 'Pierre',
          client: 'USA',
          team: 'Ukraine, 5 people',
          stack: 'Angular, Ionic, Amazon Alexa SDK'
        },
      ]
    }
  ];

  contacts = [
    {
      name: 'telegram',
      link: 'https://t.me/Natalie_Lukaniuk',
      icon: 'telegram-ion.svg'
    },
    {
      name: 'email',
      link: 'mailto:natalie.lukaniuk@gmail.com',
      icon: 'email.svg'
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/natalie-klid-lukaniuk-4158ba31/',
      icon: 'linkedin.svg'
    },
    {
      name: 'github',
      link: 'https://github.com/NatalieLukaniuk',
      icon: 'github.svg'
    },
  ];

  goSocialMedia(target: string): void {
    window.open(target, '_blank');
  }

}
