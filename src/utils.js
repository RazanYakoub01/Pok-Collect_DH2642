export const getGenerationClass = (pack) => {
    switch (pack.id) {
      case 1:
        return "gen1";
      case 2:
        return "gen2";
      case 3:
        return "gen3";
      case 4:
        return "gen4";
      case 5:
        return "gen5";
      case 6:
        return "gen6";
      case 7:
        return "gen7";
      case 8:
        return "gen8";
      case 9:
        return "gen9";
      case 10:
        return "legendary";
      default:
        return "";
    }
  };