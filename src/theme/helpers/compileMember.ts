import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections/index';
import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { Options } from '../options';
import { compilePartial, compileTemplate } from '../utils';

export function compileMember(member: DeclarationReflection) {

  let md = '';

  if (!(Options.excludePrivate && member.flags.isPrivate)) {

    switch (member.kind) {
      case ReflectionKind.Class:
      case ReflectionKind.Module:
      case ReflectionKind.ExternalModule:
      case ReflectionKind.Enum:
        Object.assign(member, { displayBackLink: true, hideBreadcrumbs: true });
        md = compileTemplate('reflection.hbs', { model: member });
        break;
      case ReflectionKind.Interface:
      Object.assign(member, { displayBackLink: Options.mode === 0 ? true : false, hideBreadcrumbs: true });
      md = compileTemplate('reflection.hbs', { model: member });
      break;
      case ReflectionKind.Constructor:
        md = compilePartial('member.constructor.hbs', member);
        break;
      case ReflectionKind.ObjectLiteral:
        md = compilePartial('member.object.hbs', member);
        break;
      default:
        md = compilePartial('member.hbs', member);
    }
  }

  return md;
}
