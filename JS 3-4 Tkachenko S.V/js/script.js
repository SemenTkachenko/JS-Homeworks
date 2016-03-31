var testPage = {
      questionNumber: 1,
      checkboxIdNumber: 1,
      addForm: function() {
        var form = document.createElement('form');
        form.setAttribute('name', 'test');
        form.setAttribute('action', '#');
        form.setAttribute('method', 'post');
        document.body.appendChild(form);
        var h1 = document.createElement('h1');
        h1.innerHTML = 'Тест по программированию';
        form.appendChild(h1);
      },
      addQuestion: function(question) {
        question = prompt('Введите вопрос');
        if (question) {
          var p = document.createElement('p');
          p.innerHTML = this.questionNumber + '. ' + question + ' ?';
          document.forms.test.appendChild(p);
        } else {
          var p = document.createElement('p');
          p.innerHTML = 'Вопрос отсутствует';
          document.forms.test.appendChild(p);
        }
      },
      addAnswer: function(answer) {
        answer = prompt('Введите ответ');
        if (answer) {
          var check = document.createElement('input');
          var label = document.createElement('label');
          check.setAttribute('type', 'checkbox');
          check.setAttribute('name', 'answ');
          check.setAttribute('value', 'yes');
          check.setAttribute('id', 'ans'+this.checkboxIdNumber);
          label.setAttribute('for', 'ans'+this.checkboxIdNumber);
          label.innerHTML = answer;
          document.forms.test.appendChild(check);
          document.forms.test.appendChild(label);
          document.forms.test.appendChild( document.createElement('br') );
        }
      },
      addSubmit: function() {
        var submit = document.createElement('input');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('value', 'Проверить мои результаты');
        document.forms.test.appendChild(submit);
      },
      addFullTest: function() {
        this.addForm();
        for (var i = 0; i < 3; i++) {
          this.addQuestion();
          for (var j = 0; j < 3; j++) {
            this.addAnswer();
            this.checkboxIdNumber++;
          }
          this.questionNumber++;
        }
        this.questionNumber = 1;
        this.checkboxIdNumber = 1;
        this.addSubmit();
      }
    };
testPage.addFullTest();