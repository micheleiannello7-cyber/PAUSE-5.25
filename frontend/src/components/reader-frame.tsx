// PAUSE — cornice luminosa della lettura: una linea sottilissima nella luce
// perimetrale del tema corrente (atmosFrame: una tonalità del tema che
// conserva sempre una componente blu/ciano PAUSE) che corre lungo il perimetro
// dello schermo, con un alone leggerissimo verso l'interno e verso l'esterno.
// Quasi impercettibile: luce ambientale, non decorazione. Sopra a tutto, mai toccabile.
import { StyleSheet, View } from "react-native";

import { makeStyles, useTheme, withAlpha } from "@/src/theme";

export function ReaderFrame({ opacity = 1 }: { opacity?: number }) {
  const styles = useStyles();
  const { colors } = useTheme();
  const tint = colors.atmosFrame;
  return (
    <View style={[StyleSheet.absoluteFill, styles.wrap, { opacity }]} pointerEvents="none" testID="reader-frame">
      <View
        style={[
          StyleSheet.absoluteFill, styles.line,
          { borderColor: withAlpha(tint, 0.42), boxShadow: `0px 0px 18px 0px ${withAlpha(tint, 0.22)}, inset 0px 0px 22px 0px ${withAlpha(colors.cyan, 0.10)}` as any },
        ]}
      />
    </View>
  );
}

const useStyles = makeStyles(() => ({
  wrap: { zIndex: 40, elevation: 40 },
  line: { borderWidth: 1, borderRadius: 30 },
}));
