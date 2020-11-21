import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string, args?: any) {
    if (!value) {
      return null;
    }

    const words = value.split(' ');

    for (let i = 0; i < words.length; i ++) {
      const word = words[i];

      if (i > 0 && this.isPreposition(word)) {

        words[i] = word.toLowerCase();

      } else {

        words[i] = this.toTitleCase(word);

      }
    }

    return words.join(' ');
  }

  private toTitleCase(word: string): string {
    const firstChar = word.substring(0, 1).toUpperCase();
    const restChars = word.substring(1).toLowerCase();

    return `${firstChar}${restChars}`;
  }

  private isPreposition(word: string): boolean {
    const prepositions: string[] = ['of', 'the'];
    const lowerCasedWord = word.toLowerCase();

    return prepositions.includes(lowerCasedWord);
  }
}
