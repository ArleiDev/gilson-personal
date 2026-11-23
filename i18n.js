/* Traduções da página. O português é lido do próprio HTML; aqui ficam EN e ES,
   na mesma ordem em que os elementos aparecem na página. */
(function () {
  var arr = ' <span class="arr">→</span>';

  function ticker(items) {
    var one = items.map(function (t) { return '<span>' + t + '</span><b>✳</b>'; }).join('');
    return one + one;
  }
  function planItems(t) {
    var n = [['01', '01'], ['01', '03'], ['02', '06'], ['04', '12']];
    var out = [];
    n.forEach(function (p) {
      out.push(t.app, t.support,
        '<b>' + p[0] + '</b> ' + (p[0] === '01' ? t.meal1 : t.mealN),
        '<b>' + p[1] + '</b> ' + (p[1] === '01' ? t.work1 : t.workN));
    });
    return out;
  }

  var T = {
    en: {
      title: 'Gilson Filho | Personal Trainer & Online Coaching — GFH Method',
      desc: 'Online coaching with personal trainer Gilson Filho (CREF 061533-RJ), weight-loss specialist. Personalized training in the app, meal plan and direct support. GFH Method.',
      stamp: 'GFH METHOD • ONLINE COACHING • ',
      map: {
        '.nav__links a': ['Method', 'Results', 'Plans', 'FAQ'],
        '.nav__cta': ['Chat on WhatsApp' + arr],
        '.hero__h1 .in': ['Lose', '<mark class="mk">3 to 8 kg</mark>', 'in 30 days,', 'without living at the gym.'],
        '.hero__lead': ['Online coaching with training built for your body, a realistic meal plan and me following you closely on WhatsApp. This is the <b>GFH Method</b>.'],
        '.hero__cta .t': ['Start now'],
        '.hero__cta .link': ['See results <span class="arr">↓</span>'],
        '.hero__nums dd': ['years in the field', 'online, from any city', 'direct support from me'],
        '.hero__cap': ['Gilson Filho<span>Weight-loss specialist</span>'],
        '.ticker__track': [ticker(['Personalized training', '<i>meal plan</i>', 'Direct support', '<i>real weight loss</i>', 'Muscle gain', '<i>GFH Method</i>'])],
        '.manifesto .label': ['(01) — The method'],
        '.manifesto__txt': ['You don’t need more willpower. You need a <em>plan built for your life</em>, with training that fits your routine, real food and <em>someone by your side</em> adjusting the path every week.'],
        '.creds span': ['Background', 'Postgraduate', 'Registration', 'Service', 'Experience'],
        '.creds b': ['Weight-loss specialist', 'Exercise Physiology and Exercise Prescription', 'CREF 061533-RJ', '100% online coaching', '10+ years in the field'],
        '.steps .label': ['(02) — How it works'],
        '.steps .h2': ['Four steps, <em>one coach</em> from start to finish.'],
        '.step h3': ['Assessment and goal', 'Training in the app', 'Meal plan', 'Support and adjustments'],
        '.step p': ['We talk about your routine, history, limitations and goal. Everything starts with you.', 'Exercises with videos and loads on your phone, designed for home or the gym.', 'Real food, no crazy diets, adjusted to your goal.', 'You talk directly to me. I track your progress and adjust the plan whenever needed.'],
        '.results .label': ['(03) — Results'],
        '.results .h2': ['Before and after <em>from people who followed the method.</em>'],
        '.note': ['Individual results vary with dedication, routine and each person’s body.'],
        '.plans .label': ['(04) — Plans'],
        '.plans .h2': ['Coaching and nutrition, <em>for as long as you choose.</em>'],
        '.plan__flag': ['Most popular'],
        '.plan h3': ['Monthly', 'Quarterly', 'Semiannual', 'Annual'],
        '.plan li': planItems({ app: 'Personalized training in the app', support: 'Direct support from the trainer', meal1: 'meal plan', mealN: 'meal plans', work1: 'personalized workout', workN: 'personalized workouts' }),
        '.plan .pill': ['Check availability' + arr, 'Check availability' + arr, 'Check availability' + arr, 'Check availability' + arr],
        '.forwho .label': ['(05) — Who it’s for'],
        '.forwho .h2': ['It’s for you <em>if you…</em>'],
        '.ticks li': ['have started many diets and workouts but couldn’t keep going;', 'have little time and need training that fits your routine;', 'want to lose weight in a healthy way, without starving;', 'want a real person following and pushing you closely;', 'train at home or at the gym, in any city.'],
        '.faq .label': ['(06) — FAQ'],
        '.faq .h2': ['Before you <em>start.</em>'],
        'summary': ['How does online coaching work?<i></i>', 'Do I need to train at a gym?<i></i>', 'I’m a beginner. Can I keep up?<i></i>', 'How soon will I see results?<i></i>', 'Do you work with people in other cities?<i></i>'],
        'details p': ['After an initial assessment, you get your training in the app and your meal plan. We talk on WhatsApp and I adjust the plan as you progress.', 'No. Your training is built for where you train: a gym, your building’s gym or at home with little equipment.', 'Yes. Exercises come with technique guidance and training starts at your level, progressing safely.', 'Following the method, many clients lose 3 to 8 kg in the first 30 days. Results vary from person to person, which is why the coaching is individual.', 'Yes. The coaching is 100% online, so distance is not a problem.'],
        '.cta .label': ['Online coaching · GFH Method'],
        '.cta__h': ['Your next <em>before and after</em> starts with a message.'],
        '.cta .t': ['Talk to Gilson'],
        '.foot__row > span:first-child': ['Online Sports Coaching · CREF 061533-RJ']
      },
      wa: {
        'Olá, Gilson! Vim pelo site e quero saber mais sobre a consultoria.': 'Hi Gilson! I came from your website and would like to know more about the coaching.',
        'Olá, Gilson! Quero começar o Método GFH. Como funciona?': 'Hi Gilson! I want to start the GFH Method. How does it work?',
        'Olá, Gilson! Tenho interesse no plano Smart Mensal.': 'Hi Gilson! I’m interested in the Smart Monthly plan.',
        'Olá, Gilson! Tenho interesse no plano Smart Trimestral.': 'Hi Gilson! I’m interested in the Smart Quarterly plan.',
        'Olá, Gilson! Tenho interesse no plano Smart Semestral.': 'Hi Gilson! I’m interested in the Smart Semiannual plan.',
        'Olá, Gilson! Tenho interesse no plano Smart Anual.': 'Hi Gilson! I’m interested in the Smart Annual plan.',
        'Olá, Gilson! Quero garantir minha vaga na consultoria.': 'Hi Gilson! I’d like to secure my spot in the coaching.',
        'Olá, Gilson! Vim pelo site.': 'Hi Gilson! I came from your website.'
      }
    },
    es: {
      title: 'Gilson Filho | Entrenador personal y asesoría online — Método GFH',
      desc: 'Asesoría online con el entrenador personal Gilson Filho (CREF 061533-RJ), especialista en pérdida de peso. Entrenamiento personalizado en la app, plan alimentario y soporte directo. Método GFH.',
      stamp: 'MÉTODO GFH • ASESORÍA ONLINE • ',
      map: {
        '.nav__links a': ['Método', 'Resultados', 'Planes', 'Dudas'],
        '.nav__cta': ['Hablar por WhatsApp' + arr],
        '.hero__h1 .in': ['Pierde', '<mark class="mk">de 3 a 8 kg</mark>', 'en 30 días,', 'sin vivir en el gimnasio.'],
        '.hero__lead': ['Asesoría online con entrenamiento hecho para tu cuerpo, un plan alimentario posible y yo acompañándote de cerca por WhatsApp. Este es el <b>Método GFH</b>.'],
        '.hero__cta .t': ['Quiero empezar'],
        '.hero__cta .link': ['Ver resultados <span class="arr">↓</span>'],
        '.hero__nums dd': ['años de profesión', 'online, desde cualquier ciudad', 'soporte directo conmigo'],
        '.hero__cap': ['Gilson Filho<span>Especialista en pérdida de peso</span>'],
        '.ticker__track': [ticker(['Entrenamiento personalizado', '<i>plan alimentario</i>', 'Soporte directo', '<i>pérdida de peso real</i>', 'Hipertrofia', '<i>Método GFH</i>'])],
        '.manifesto .label': ['(01) — El método'],
        '.manifesto__txt': ['No necesitas más fuerza de voluntad. Necesitas un <em>plan hecho para tu vida</em>, con un entrenamiento que quepa en tu rutina, comida de verdad y <em>alguien a tu lado</em> ajustando el camino cada semana.'],
        '.creds span': ['Formación', 'Posgrado', 'Registro', 'Atención', 'Experiencia'],
        '.creds b': ['Especialista en pérdida de peso', 'Fisiología del Ejercicio con Prescripción de Ejercicios', 'CREF 061533-RJ', 'Asesoría 100% online', '+10 años en el área'],
        '.steps .label': ['(02) — Cómo funciona'],
        '.steps .h2': ['Cuatro pasos, <em>un acompañamiento</em> de principio a fin.'],
        '.step h3': ['Evaluación y objetivo', 'Entrenamiento en la app', 'Plan alimentario', 'Soporte y ajustes'],
        '.step p': ['Hablamos de tu rutina, historial, limitaciones y meta. Todo empieza por ti.', 'Ejercicios con video y carga en el celular, pensados para casa o gimnasio.', 'Comida de verdad, sin dietas locas, ajustada a tu objetivo.', 'Hablas directo conmigo. Acompaño tu evolución y ajusto el plan cuando hace falta.'],
        '.results .label': ['(03) — Resultados'],
        '.results .h2': ['Antes y después <em>de quien siguió el método.</em>'],
        '.note': ['Los resultados individuales varían según la dedicación, la rutina y el organismo de cada persona.'],
        '.plans .label': ['(04) — Planes'],
        '.plans .h2': ['Asesoría y nutrición, <em>por el tiempo que elijas.</em>'],
        '.plan__flag': ['Más elegido'],
        '.plan h3': ['Mensual', 'Trimestral', 'Semestral', 'Anual'],
        '.plan li': planItems({ app: 'Entrenamiento personalizado en la app', support: 'Soporte directo con el entrenador', meal1: 'plan alimentario', mealN: 'planes alimentarios', work1: 'entrenamiento personalizado', workN: 'entrenamientos personalizados' }),
        '.plan .pill': ['Consultar cupo' + arr, 'Consultar cupo' + arr, 'Consultar cupo' + arr, 'Consultar cupo' + arr],
        '.forwho .label': ['(05) — Para quién es'],
        '.forwho .h2': ['Es para ti <em>si…</em>'],
        '.ticks li': ['ya empezaste varias dietas y entrenamientos, pero no lograste mantenerlos;', 'tienes poco tiempo y necesitas un entrenamiento que quepa en tu rutina;', 'quieres bajar de peso con salud, sin pasar hambre;', 'quieres a alguien de verdad acompañándote y exigiéndote de cerca;', 'entrenas en casa o en el gimnasio, en cualquier ciudad.'],
        '.faq .label': ['(06) — Dudas'],
        '.faq .h2': ['Antes de <em>empezar.</em>'],
        'summary': ['¿Cómo funciona la asesoría online?<i></i>', '¿Necesito entrenar en un gimnasio?<i></i>', 'Soy principiante. ¿Puedo seguir el ritmo?<i></i>', '¿En cuánto tiempo veo resultados?<i></i>', '¿Atiendes a personas de otras ciudades?<i></i>'],
        'details p': ['Después de una evaluación inicial, recibes el entrenamiento en la app y el plan alimentario. Hablamos por WhatsApp y ajusto el plan según tu evolución.', 'No. El entrenamiento se arma para donde entrenas: gimnasio, el de tu edificio o en casa con poco equipo.', 'Sí. Los ejercicios vienen con orientación de ejecución y el entrenamiento empieza en tu nivel, avanzando con seguridad.', 'Siguiendo el método, muchas alumnas pierden de 3 a 8 kg en los primeros 30 días. El resultado varía de persona a persona, por eso el acompañamiento es individual.', 'Sí. La asesoría es 100% online, así que la distancia no es problema.'],
        '.cta .label': ['Asesoría online · Método GFH'],
        '.cta__h': ['Tu próximo <em>antes y después</em> empieza con un mensaje.'],
        '.cta .t': ['Hablar con Gilson'],
        '.foot__row > span:first-child': ['Asesoría Deportiva Online · CREF 061533-RJ']
      },
      wa: {
        'Olá, Gilson! Vim pelo site e quero saber mais sobre a consultoria.': '¡Hola, Gilson! Vengo de tu sitio web y quiero saber más sobre la asesoría.',
        'Olá, Gilson! Quero começar o Método GFH. Como funciona?': '¡Hola, Gilson! Quiero empezar el Método GFH. ¿Cómo funciona?',
        'Olá, Gilson! Tenho interesse no plano Smart Mensal.': '¡Hola, Gilson! Me interesa el plan Smart Mensual.',
        'Olá, Gilson! Tenho interesse no plano Smart Trimestral.': '¡Hola, Gilson! Me interesa el plan Smart Trimestral.',
        'Olá, Gilson! Tenho interesse no plano Smart Semestral.': '¡Hola, Gilson! Me interesa el plan Smart Semestral.',
        'Olá, Gilson! Tenho interesse no plano Smart Anual.': '¡Hola, Gilson! Me interesa el plan Smart Anual.',
        'Olá, Gilson! Quero garantir minha vaga na consultoria.': '¡Hola, Gilson! Quiero asegurar mi cupo en la asesoría.',
        'Olá, Gilson! Vim pelo site.': '¡Hola, Gilson! Vengo de tu sitio web.'
      }
    }
  };

  window.GFH_I18N = T;
})();
