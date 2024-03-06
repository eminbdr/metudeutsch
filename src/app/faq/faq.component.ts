import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FaqComponent {
  faqs = [
    {
      question: 'Was ist METU-DEUTSCH?',
      body: `<p>METU-Deutsch ist ein Studentenclub, der alle Aktivitäten und Ankündigungen über Deutsch auf dem Campus unter einem Dach vereinen, ein deutschsprachiges Umfeld schaffen und die deutsche Kultur fördern will. 
      </p>`
    },

    {
      question: 'Wie funktiert "Lass Uns Aufzubauen Zusammen"?',
      body: `<p class="first"> des Volkes, durch das Volk, für das Volk!</p>
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
 </p>`
    },
    {
      question: 'Was ist unsere Philosophie zum Sprachenlernen?',
      body: `<p>METU-Deutsch basiert auf einer alternativen Sprachlernphilosophie, die die Methode "Eintauchen" fördern. Während Grammatik und Deklarationen Teil der Sprachniveaubewertung, glauben wir, dass Grammatik nur ein Werkzeug ist und Deklarationen nur eine Frage der Übung sind.
      <br><br>
      In METU-Deutsch wollen wir die Methode fördern, die wir "Eintauchen" nennen, bei der Menschen unabhängig von der CERF-Skalenstufe Vokabeln durch ihr Interessengebiet lernen, indem sie es auf Deutsch verfolgen. Sobald die Menschen einen Wortschatz angesammelt haben, werden sie den Drang verspüren, sich auf Deutsch auszudrücken. Erst an diesem Punkt wird der Bedarf an bestimmten Grammatikkenntnissen entstehen.

      Nachdem sie ihr Interessengebiet genossen und sich bequem auf Deutsch ausgedrückt haben, wird sich der aktive Sprachgebrauch später als Kenntnis von Deklarationen und schwierigeren Grammatikkonzepten selbst zurückgeben.
    </p>`
    },
    {
      question: "Ich bin ein Anfänger, was soll ich tun?",
  
      body: `Als Anfänger bedeutet dies, dass du einen größeren Raum für Verbesserungen hast, und das ist großartig. Denn während Wörterbücher und Übersetzer deine Begleiter sind, sind Fehler auch dein bester Freund. Du kannst jederzeit an Gesprächen in unseren Gruppen teilnehmen, vielleicht mit Hilfe von Übersetzern und anderen Mitgliedern. Mit der Zeit wirst du feststellen, dass du dich mit unglaublicher Geschwindigkeit verbesserst. 
      
      Vergiss auch nicht, unseren Lernmaterial-Pool zu überprüfen.`
    },
    {
      question: 'Was ist, wenn ich Sprachprüfungen bestehen möchte?',
      body: `<p>Ziel von METU-Deutsch ist es nicht, ein Deutschkurs zu sein, sondern eine deutschsprachige Umgebung zu schaffen. Wenn Sie jedoch aktiver in der Gemeinschaft werden und Ihren Beitrag leisten, werden Sie mit vielen Grammatikregeln, Hörübungen, Sprechübungen, Leseübungen und vielem mehr vertraut gemacht ...

    Wenn Sie also einen alternativen Weg einschlagen, beherrschen Sie zunächst das Sprechen und später die Grammatik.
    Darüber hinaus können Sie sich jederzeit unseren Lernmaterialpool ansehen, um Grammatik anhand der neuesten aktualisierten Inhalte zu lernen.

    Wenn Prüfungen für Sie dringende Priorität haben, empfehlen wir Ihnen, im METU-Deutsch aktiv zu sein und gleichzeitig unsere vorgeschlagenen Materialien zu studieren.
  </p>`
    },

    {
      question: 'Wie kann ich die Methode des „Eintauchens“ anwenden?',
      body: `<p>METU-Deutsch ist genau für diese Frage da. Sie können Ihre Deutschkenntnisse ganz einfach verbessern, indem Sie;
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
      Lassen Sie uns gemeinsam die Deutsche Kultur und Sprache fördern!</p>`
    },

    {
      question: 'Vergessen Sie nicht, unsere Hashtags zu erkunden!!!',
      body: `<p><span class="hashtags">#wasdenkensie</span>: Falls Sie sich fragen, was andere Leute über das Thema denken.
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
    <p class="end">Es wäre cool, wenn Sie Hashtags in den Sätzen verwenden :&#41;</p>`
    },

    {
      question: 'Ich interessiere mich auch für Design/Entwicklung/Lehre…',
      body: `<p>
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
  </p>`
    },
    {question: 'Gibt es für den Sprachclub eine Quote?',
    body: `Als METU-Deutsch haben wir aufgrund unserer freiwilligen Struktur begrenzte Ressourcen. Das bedeutet, dass wir selbst, wenn wir möchten, nicht in der Lage sind, alle unsere Mitglieder zu beherbergen. Da ein Sprechclub selbst aktive Teilnehmer erfordert, entwickeln wir ein faires System, das automatisch aktive Mitglieder der Woche auswählt, in der der Sprechclub organisiert wird. Weitere Details zu Sprechclubs werden Ihnen ausführlich mitgeteilt. Vergessen Sie nicht, an unserer einzigen deutschen Whatsapp-Gruppe teilzunehmen.`
  },
  {question: 'Was ist, wenn ich nicht an Sprechclubs teilnehmen kann?',
  body: `Sprechen ist der wesentlichste Teil des Sprachenlernens, daher sollten Menschen immer in der Lage sein, ihre Sprechfähigkeiten zu verbessern. Deshalb haben wir auch unseren Discord-Kanal eingerichtet, damit die Menschen ihre Sprechfähigkeiten verbessern können, während sie in unseren Discord-Kanälen "chillen".`},

  {
    question: "Ich bin ein Anfänger, was soll ich tun?",

    body: `Als Anfänger bedeutet dies, dass du einen größeren Raum für Verbesserungen hast, und das ist großartig. Denn während Wörterbücher und Übersetzer deine Begleiter sind, sind Fehler auch dein bester Freund. Du kannst jederzeit an Gesprächen in unseren Gruppen teilnehmen, vielleicht mit Hilfe von Übersetzern und anderen Mitgliedern. Mit der Zeit wirst du feststellen, dass du dich mit unglaublicher Geschwindigkeit verbesserst. 
    
    Vergiss auch nicht, unseren Lernmaterial-Pool zu überprüfen.`
  }
  ];
}
