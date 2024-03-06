import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faqen',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FaqenComponent {
  faqs = [
    {
      question: 'What is METU-DEUTSCH?',
      body: `METU Deutsch is a club that gathers all activities and announcements about German on campus under one roof while creating a German speaking environment and fostering German culture.`,
    },

    {
      question: `How does "Let's Build Together" work?"`,
      body: `<p class="first">Of the people, by the people, for the people!</p>
        <p>As METU-Deutsch, we are building this community voluntarily. Our sole purpose is to help and benefit through the community. That's why we are against hierarchy. So we prefered to share our METU-DEUTSCH TO-DO list and recruit people as teammates as they complete and report their works to us. 
        </p>
        <p>
          <a href="https://docs.google.com/document/d/1srh8Vd9y-IFwLCGLUiOPeJX4jbHL7tNuxbuPlN11jCk/edit?usp=sharing">Click here to access our TO-DO List
          </a>
        </p>
        <p>
          Also if you have any idea or project for METU Deutsch, We are always here to support you. 
        </p>
        <p>
          Don't forget to contact us over <a href="https://www.instagram.com/metu_deutsch/">&#64;metudeutsch</a> on Instagram or <a href="mailto:metudeutschclub@gmail.com" >metudeutschclub&#64;gmail.com</a>
        </p>`,
    },
    {
      question: 'What is our language learning philosophy?',
      body: `<p>METU-Deutsch is built around an alternative language learning philosophy, that promotes "Diving Into" Method. While grammar and declarations are a part of language level evaluation, we believe that grammar is just a tool and declarations are just a matter of practice.
      <br><br>
      In METU-Deutsch, we are aiming to foster the method what we call "diving into", in which, people learns vocabulary through their area of interest by pursuing it in German. Once the people accumulate some vocabulary, they will feel the urge to express themselves in German. Only at that point, need for certain grammar knowledge will arise. 
      
      After enjoying their area of interest and expressing themselves comfortably in German, active use of language will later return themselves as knowledge of declarations and harder grammar concepts.
    </p>`,
    },

    {
      question: 'What if I wish to pass language exams?',
      body: `<p>METU-Deutsch is not aiming to be a German course but to create a German speaking environment. However, as you become more active in and contribute to the community, you will be exposed to a lot of grammar rules, listening practice, speaking practice, reading practice and more...

    Thus, by following an alternative path, you will be proficient in speaking firstly, and later in grammar.
    Additionally you can always check out our learning material pool to study grammar from the latest updated contents.

    If exams are your urgent priority, we suggest being active in the club and studying over our suggested materials at the same time.
  </p>`,
    },

    {
      question: 'How can I apply "Diving Into" method?',
      body: `<p>METU-Deutsch is exactly there for this issue. You can easily improve your German skills simply by;
    <p>
      &#8226; Pursuing your area of interests through our suggested contents and the contents you suggest to the community.
    </p>
    <p>
      &#8226; Speaking actively around hashtags in groups.
    </p>
    <p>
      &#8226; Solving quizzes posted in the group that includes listening, reading and vocabulary practices.
    </p>
    <p>
      &#8226; Attending and being active in our speaking clubs and events.  
    </p>
    <p>
      &#8226; Taking an active role in the community that aims to provide all of these.
    </p>
    <p class="end" style="font-weight: 600;">
    Let's foster German culture and language together!</p>`,
    },

    {
      question: `Don't forget to explore our hashtags!!!`,
      body: `<p><span class="hashtags">#wasdenkensie</span>: if you are wondering what other people think about the topic.</p>
      <p><span class="hashtags">#memedestages</span>: Competition for the best meme of the day, laugher is the winner!</p>
      <p><span class="hashtags">#höregernezu</span>: If 3 people use this hashtag, it is an invitation to a language chat</p>
      <p><span class="hashtags">#wortichmag</span>: Share the word that sounds interesting!</p>
      <p><span class="hashtags">#musikfürihr</span>: We would like to know what you are listening to?</p>
      <p><span class="hashtags">#musikfürihr</span>: Share the news of the day?</p>
      <p><span class="hashtags">#deutschetimologie</span>: Because etymology can be fascinating.</p>
      <p><span class="hashtags">#fürmetudeutsch</span>: An idea that you think is good for METU Deutsch (we want to support)</p>
      <p>It would be cool if you use hashtags in the sentences:&#41;</p>`,
    },

    {
      question: 'I am also interested in Design/Developing/Teaching…',
      body: `<p>
    <span style="font-weight: 600;">That’s great!</span> Because as METU-Deutsch, while we are trying to foster a German speaking environment, for the organization part, we are also trying to create a project-based collaborative learning environment.
  </p>
  <p>
    Since METU-Deutsch is a multidimensional project, there is always a position that you can improve yourself in, meanwhile also contribute to the community. We are highly suggesting you to take part in our organization committees because, as founding members of METU-Deutsch, while we were building infrastructure for our club, we have learned many things that are impossible to list here by taking an active part in organization.
  </p>
  <p>
    For example, if you have a passion for design, then we invite you to take part in our design community and learn by collaborating with other volunteer organization members; Or you may have a passion for software development, then we invite you to our software development committee that are responsible for maintaining the club's website and automatization process using AI tools. Or let’s say, teaching is your profession, then by taking part in our language committee, you can study dynamics over collective learning.
  </p>
  <p>
    In short, METU-Deutsch Club aims to be an environment that you can improve yourself on many things.
  </p>
  <p style="font-weight: 600;">
    Let’s learn together!!!
  </p>`,
    },

    {
      question: 'Could you host everyone in speaking clubs?',
      body: `As METU-Deutsch, since we are a voluntary project, we have limited resources so that means even if we want, we are not able to host all of our members. Also, as a concept, speaking club itself requires active participants. So we are building a fair system that automatically select active members of the week in which the speaking club will be organized. More details about speaking clubs will be shared with you in detail. Don't forget to attend our only German Whatsapp Group`
    },
    {
      question: "What if I couldn't attend speaking clubs?",
      body: `Speaking is the most essential part of language learning, so people should always be able to improve their speaking abilities. That's why we also built our discord channel so that people can improve their speaking while "chilling" in our discord channels.`
    },
    {
      question: "I am a beginner, what should I do?",
      body: `Being beginner means that you have a bigger room for improvement and that is great. Because while dictionaries and translator are your company, mistakes are also your best friend.
      You can always participate into conversation in our groups, perhaps with the help of translator and other members. By the time, you will see that you are improving with an incredible pace.
      Also, don't forget to check out our learning material pool.`
    }

  ];
}
