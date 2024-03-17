import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RouterLink, CommonModule, HeaderComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class BaseFaqComponent {

  protected processFaqs(){

  }

  faqs = [
    { question:'',
      question_de: 'Was ist METU-DEUTSCH?',
      question_en: 'What is METU-DEUTSCH?',
      body: `<p>METU-Deutsch ist ein Studentenclub, der alle Aktivitäten und Ankündigungen über Deutsch auf dem Campus unter einem Dach vereinen, ein deutschsprachiges Umfeld schaffen und die deutsche Kultur fördern will. 
      </p>`,
      body_en: `<p>METU Deutsch is a club that aims to gather all activities and announcements about German on campus under one roof while creating a German speaking environment and fostering German culture.</p>`,
    },

    { question:'',
      question_de: 'Wie funktiert "Lass Uns Aufzubauen Zusammen"?',
      question_en: `How does "Let's Build Together" work?"`,
      body_de: `<p class="first"> des Volkes, durch das Volk, für das Volk!</p>
 <p>Als METU-Deutsch, bauen wir diese Studentenclub freiwillig auf. Unser einziges Ziel ist es, durch die Studentenclub einander zu helfen und voneinander zu profitieren. Deshalb sind wir gegen eine Hierarchie. Deshalb haben wir uns entschieden, unsere METU-DEUTSCH TO-DO-Liste zu teilen und Leute als Teammitglieder zu rekrutieren, während sie ihre Arbeiten abschließen und uns berichten.
 </p>
 <p>
   <a href="https://docs.google.com/document/d/1srh8Vd9y-IFwLCGLUiOPeJX4jbHL7tNuxbuPlN11jCk/edit?usp=sharing">Klicken
     Sie hier, um unsere TO-DO-Liste zu öffnen
   </a>
 </p>
 <p>
   Auch wenn Sie eine Idee oder ein Projekt für METU Deutsch haben, sind wir immer hier, um Sie zu
   unterstützen.
 </p>
 <p>
   Kontaktieren Sie uns unter <a href="https://www.instagram.com/metu_deutsch/">&#64;metudeutsch</a> auf
   Instagram oder <a href="mailto:metudeutschclub@gmail.com">metudeutschclub&#64;gmail.com</a>
 </p>`,

      body_en: `<p class="first">Of the people, by the people, for the people!</p>
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
          Don't forget to contact us over <a href="https://www.instagram.com/metu_deutsch/">&#64;metudeutsch</a> on Instagram or <a href="mailto::metudeutschclub@gmail.com">metudeutschclub&#64;gmail.com</a>
        </p>`,
    },
    { question:'',
      question_de: 'Was ist unsere Philosophie zum Sprachenlernen?',
      question_en: 'What is our language learning philosophy?',
      body_de: `<p>METU-Deutsch basiert auf einer alternativen Sprachlernphilosophie, die die Methode "Eintauchen" fördern. Während Grammatik und Deklarationen Teil der Sprachniveaubewertung, glauben wir, dass Grammatik nur ein Werkzeug ist und Deklarationen nur eine Frage der Übung sind.
      <br><br>
      In METU-Deutsch wollen wir die Methode fördern, die wir "Eintauchen" nennen, bei der Menschen unabhängig von der CERF-Skalenstufe Vokabeln durch ihr Interessengebiet lernen, indem sie es auf Deutsch verfolgen. Sobald die Menschen einen Wortschatz angesammelt haben, werden sie den Drang verspüren, sich auf Deutsch auszudrücken. Erst an diesem Punkt wird der Bedarf an bestimmten Grammatikkenntnissen entstehen.

      Nachdem sie ihr Interessengebiet genossen und sich bequem auf Deutsch ausgedrückt haben, wird sich der aktive Sprachgebrauch später als Kenntnis von Deklarationen und schwierigeren Grammatikkonzepten selbst zurückgeben.
    </p>`,
      body_en: `<p>METU-Deutsch is built around an alternative language learning philosophy, that promotes "Diving Into" Method. While grammar and declarations are a part of language level evaluation, we believe that grammar is just a tool and declarations are just a matter of practice.
      <br><br>
      In METU-Deutsch, we are aiming to foster the method what we call "diving into", in which, people learns vocabulary through their area of interest by pursuing it in German. Once the people accumulate some vocabulary, they will feel the urge to express themselves in German. Only at that point, need for certain grammar knowledge will arise. 
      
      After enjoying their area of interest and expressing themselves comfortably in German, active use of language will later return themselves as knowledge of declarations and harder grammar concepts.
    </p>`,
    },
    { question:'',
      question_de: 'Ich bin ein Anfänger, was soll ich tun?',
      question_en: "I am a beginner, what should I do?",
      body: `Als Anfänger bedeutet dies, dass du einen größeren Raum für Verbesserungen hast, und das ist großartig. Denn während Wörterbücher und Übersetzer deine Begleiter sind, sind Fehler auch dein bester Freund. Du kannst jederzeit an Gesprächen in unseren Gruppen teilnehmen, vielleicht mit Hilfe von Übersetzern und anderen Mitgliedern. Mit der Zeit wirst du feststellen, dass du dich mit unglaublicher Geschwindigkeit verbesserst. 
      
      Vergiss auch nicht, unseren Lernmaterial-Pool zu überprüfen.`,
      body_en: `Being beginner means that you have a bigger room for improvement and that is great. Because while dictionaries and translator are your company, mistakes are also your best friend.
      You can always participate into conversation in our groups, perhaps with the help of translator and other members. By the time, you will see that you are improving with an incredible pace.
      Also, don't forget to check out our learning material pool.`,
    },
    { question:'',
      question_de: 'Was ist, wenn ich Sprachprüfungen bestehen möchte?',
      question_en: 'What if I wish to pass language exams?',
      body_de: `<p>Ziel von METU-Deutsch ist es nicht, ein Deutschkurs zu sein, sondern eine deutschsprachige Umgebung zu schaffen. Wenn Sie jedoch aktiver in der Gemeinschaft werden und Ihren Beitrag leisten, werden Sie mit vielen Grammatikregeln, Hörübungen, Sprechübungen, Leseübungen und vielem mehr vertraut gemacht ...

    Wenn Sie also einen alternativen Weg einschlagen, beherrschen Sie zunächst das Sprechen und später die Grammatik.
    Darüber hinaus können Sie sich jederzeit unseren Lernmaterialpool ansehen, um Grammatik anhand der neuesten aktualisierten Inhalte zu lernen.

    Wenn Prüfungen für Sie dringende Priorität haben, empfehlen wir Ihnen, im METU-Deutsch aktiv zu sein und gleichzeitig unsere vorgeschlagenen Materialien zu studieren.
  </p>`,
      body_en: `<p>METU-Deutsch is not aiming to be a German course but to create a German speaking environment. However, as you become more active in and contribute to the community, you will be exposed to a lot of grammar rules, listening practice, speaking practice, reading practice and more...

    Thus, by following an alternative path, you will be proficient in speaking firstly, and later in grammar.
    Additionally you can always check out our learning material pool to study grammar from the latest updated contents.

    If exams are your urgent priority, we suggest being active in the club and studying over our suggested materials at the same time.
  </p>`,
    },

    { question:'',
      question_de: 'Wie kann ich die Methode des „Eintauchens“ anwenden?',
      question_en: 'How can I apply "Diving Into" method?',
      body_de: `<p>METU-Deutsch ist genau für diese Frage da. Sie können Ihre Deutschkenntnisse ganz einfach verbessern, indem Sie;
    <p>
      &#8226; Verfolgen Ihr Interessengebiet durch unsere vorgeschlagenen Inhalte und die Inhalte, die Sie der METU-Deutsch vorschlagen.
    </p>
    <p>
      &#8226; Sprechen aktiv in Gruppen über Hashtags .
    </p>
    <p>
      &#8226; Lösen veröffentlichte Quizze in unserer Gruppe "Nur Deutsch", die Hör-, Lese- und Wortschatzübungen beinhalten.
    </p>
    <p>
      &#8226; Teilnehmen unsere Vortragsclubs und Aktivitäten
    </p>
    <p>
      &#8226; Übernehmen eine aktive Rolle in METU-Deutsch, die all dies bieten möchte.
    </p>
    <p class="end" style="font-weight: 600;">
      Lassen Sie uns gemeinsam die Deutsche Kultur und Sprache fördern!</p>`,
      body_en: `<p>METU-Deutsch is exactly there for this issue. You can easily improve your German skills simply by;
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

    { question:'',
      question_de: 'Vergessen Sie nicht, unsere Hashtags zu erkunden!!!',
      question_en: `Don't forget to explore our hashtags!!!`,
      body_de: `<p><span class="hashtags">#wasdenkensie</span>: Falls Sie sich fragen, was andere Leute über das Thema denken.
    </p>
    <p><span class="hashtags">#memedestages</span>: Wettbewerb um das beste Meme des Tages, Lacher sind die
      Gewinner!</p>
    <p><span class="hashtags">#höregernezu</span>: Wenn 3 Personen dieses Hashtag verwenden, ist es eine Einladung
      zu einem Sprachchat</p>
    <p><span class="hashtags">#wortichmag</span>: Teilen Sie das Wort, das interessant klingt!</p>
    <p><span class="hashtags">#musikfürihr</span>: Wir würden gerne wissen, was Sie hören?</p>
    <p><span class="hashtags">#guckewaslos</span>: Teilen Sie die Neuigkeiten des Tages?</p>
    <p><span class="hashtags">#deutschetimologie</span>: Weil Etymologie faszinierend sein kann.</p>
    <p><span class="hashtags">#fürmetudeutsch</span>: Eine Idee, die Sie für METU Deutsch gut finden (wir möchten
      unterstützen)</p>
    <p class="end">Es wäre cool, wenn Sie Hashtags in den Sätzen verwenden :&#41;</p>`,

      body_en: `<p><span class="hashtags">#wasdenkensie</span>: if you are wondering what other people think about the topic.</p>
      <p><span class="hashtags">#memedestages</span>: Competition for the best meme of the day, laugher is the winner!</p>
      <p><span class="hashtags">#höregernezu</span>: If 3 people use this hashtag, it is an invitation to a language chat</p>
      <p><span class="hashtags">#wortichmag</span>: Share the word that sounds interesting!</p>
      <p><span class="hashtags">#musikfürihr</span>: We would like to know what you are listening to?</p>
      <p><span class="hashtags">#guckewaslos</span>: Share the news of the day?</p>
      <p><span class="hashtags">#deutschetimologie</span>: Because etymology can be fascinating.</p>
      <p><span class="hashtags">#fürmetudeutsch</span>: An idea that you think is good for METU Deutsch (we want to support)</p>
      <p>It would be cool if you use hashtags in the sentences:&#41;</p>`,






    },

    { question:'',
      question_de: 'Ich interessiere mich auch für Design/Entwicklung/Lehre…',
      question_en: 'I am also interested in Design/Developing/Teaching…',
      body_de: `<p>
    <span style="font-weight: 600;">Das ist großartig!</span> Denn während wir als METU-Deutsch versuchen, eine deutschsprachige Umgebung zu fördern, versuchen wir im organisatorischen Bereich auch, eine projektbasierte, kollaborative Lernumgebung zu schaffen.
  </p>
  <p>
    Da METU-Deutsch ein mehrdimensionales Projekt ist, gibt es immer eine Position, in der Sie sich verbessern und gleichzeitig einen Beitrag zur Gemeinschaft leisten können. Wir empfehlen Ihnen dringend, in unseren Organisationskomitees mitzuwirken, denn als Gründungsmitglieder von METU-Deutsch haben wir beim Aufbau der Infrastruktur für unseren Club viele Dinge gelernt, die wir hier nicht auflisten können, indem wir uns aktiv an der Organisation beteiligten.
  </p>
  <p>
    Wenn Sie beispielsweise eine Leidenschaft für Design haben, laden wir Sie ein, Teil unserer Design-Community zu werden und durch die Zusammenarbeit mit anderen Mitgliedern einer Freiwilligenorganisation zu lernen. Oder Sie haben eine Leidenschaft für Softwareentwicklung? Dann laden wir Sie in unser Softwareentwicklungskomitee ein, das für die Pflege der Website des Clubs und den Automatisierungsprozess mithilfe von KI-Tools verantwortlich ist. Oder sagen wir mal, Lehrer sind Ihr Beruf, dann können Sie durch die Teilnahme an unserem Sprachausschuss die Dynamik des kollektiven Lernens untersuchen.
  </p>
  <p>
    Kurz gesagt, der METU-Deutsch Club möchte ein Umfeld bieten, in dem Sie sich in vielen Dingen verbessern können.
  </p>
  <p style="font-weight: 600;">
    Lasst uns gemeinsam lernen!!!
  </p>`,


      body_en: `<p>
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
    { question:'',
      question_de: 'Gibt es für den Sprachclub eine Quote?',
      question_en: 'Is there a quota for the speaking club?',

      body_de: `Als METU-Deutsch haben wir aufgrund unserer freiwilligen Struktur begrenzte Ressourcen. Das bedeutet, dass wir selbst, wenn wir möchten, nicht in der Lage sind, alle unsere Mitglieder zu beherbergen. Da ein Sprechclub selbst aktive Teilnehmer erfordert, entwickeln wir ein faires System, das automatisch aktive Mitglieder der Woche auswählt, in der der Sprechclub organisiert wird. Weitere Details zu Sprechclubs werden Ihnen ausführlich mitgeteilt. Vergessen Sie nicht, an unserer einzigen deutschen Whatsapp-Gruppe teilzunehmen.`,

      body_en: `As METU-Deutsch, due to our voluntary structure, we have limited resources. This means that we are not able to accommodate all of our members even if we want to. Since a speaking club requires active participants itself, we are developing a fair system that automatically selects active members of the week in which the speaking club is organized. Further details about speaking clubs will be informed to you in detail. Don't forget to participate in our only German Whatsapp group.`,
      
    },
    { question:'',
      question_de: 'Was ist, wenn ich nicht an Sprechclubs teilnehmen kann?',
      question_en: "What if I couldn't attend speaking clubs?",

      body_de: `Sprechen ist der wesentlichste Teil des Sprachenlernens, daher sollten Menschen immer in der Lage sein, ihre Sprechfähigkeiten zu verbessern. Deshalb haben wir auch unseren Discord-Kanal eingerichtet, damit die Menschen ihre Sprechfähigkeiten verbessern können, während sie in unseren Discord-Kanälen "chillen".`,
      body_en: `Speaking is the most essential part of language learning, so people should always be able to improve their speaking abilities. That's why we also built our discord channel so that people can improve their speaking while "chilling" in our discord channels.`,
    },
  ];
}


@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RouterLink, CommonModule,HeaderComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FaqComponent extends BaseFaqComponent{

  constructor() {
    super();
  }

  protected override processFaqs() {
    this.faqs.forEach((faq) => {
      faq.question = faq.question_de;
      faq.body = faq.body_de;
    });
  }

  
}

@Component({
  selector: 'app-faqen',
  standalone: true,
  imports: [RouterLink, CommonModule,HeaderComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FaqenComponent extends BaseFaqComponent{
  
    constructor() {
      super();
    }
  
    protected override processFaqs() {
      this.faqs.forEach((faq) => {
        faq.question = faq.question_en;
        faq.body = faq.body_en;
      });
    }
}
