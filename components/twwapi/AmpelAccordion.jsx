/* eslint-disable react/prop-types */
import React from "react";

// MUI
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { ExpandMore } from "@material-ui/icons";

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: "50%",
    display: "inline-block",
    marginTop: 6,
    marginRight: 15,
  },
});
/**
 * AmpelAccordion displays information received via props in form of a dropdown with a traffix light
 * @component
 */
const AmpelAccordion = (props) => {
  const { classes } = props;

  /**
   * Ampel takes a number between 0 and 2 and sets a color accordingly
   * @component
   */
  function ampel(zahl) {
    switch (zahl) {
      case "0":
        return "green";
      case "1":
        return "yellow";
      case "2":
        return "red";
      default:
        return "black";
    }
  }

  // TODO Rewrite with at least some kind of abstraction..
  return (
    <div className={classes.root}>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.general.Abstandsregeln.ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>Abstandsregeln</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            dangerouslySetInnerHTML={{
              __html: props.content.general.Abstandsregeln.text,
            }}
          ></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.tourism[10].Airports["Öffnung und Zugang"].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Airports / Flughäfen
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Öffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[10].Airports["Öffnung und Zugang"]
                      .text,
                }}
              ></Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Aufenthalt und Hygiene:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[10].Airports["Aufenthalt und Hygiene"]
                      .text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[10].Airports["Weitere Informationen"] !==
              "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[10].Airports[
                        "Weitere Informationen"
                      ],
                  }}
                ></Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.tourism[2]["Bars, Pubs und Kneipen"][
                  "Öffnung und Zugang"
                ].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Bars, Pubs und Kneipen
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Öffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[2]["Bars, Pubs und Kneipen"][
                      "Öffnung und Zugang"
                    ].text,
                }}
              ></Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Aufenthalt und Hygiene:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[2]["Bars, Pubs und Kneipen"][
                      "Aufenthalt und Hygiene"
                    ].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[2]["Bars, Pubs und Kneipen"][
              "Weitere Informationen"
            ] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[2]["Bars, Pubs und Kneipen"][
                        "Weitere Informationen"
                      ],
                  }}
                ></Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.tourism[1]["Biergärten und Außengastronomie"][
                  "Öffnung und Zugang"
                ].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Biergärten und Außengastronomie
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Öffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[1]["Biergärten und Außengastronomie"][
                      "Öffnung und Zugang"
                    ].text,
                }}
              ></Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Aufenthalt und Hygiene:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[1]["Biergärten und Außengastronomie"][
                      "Aufenthalt und Hygiene"
                    ].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[1]["Biergärten und Außengastronomie"][
              "Weitere Informationen"
            ] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[1][
                        "Biergärten und Außengastronomie"
                      ]["Weitere Informationen"],
                  }}
                ></Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.tourism[9].Busreisen["Öffnung und Zugang"].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>Busreisen</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Öffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[9].Busreisen["Öffnung und Zugang"]
                      .text,
                }}
              ></Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Aufenthalt und Hygiene:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[9].Busreisen["Aufenthalt und Hygiene"]
                      .text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[9].Busreisen["Weitere Informationen"] !==
              "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[9].Busreisen[
                        "Weitere Informationen"
                      ],
                  }}
                ></Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.tourism[7]["Camping- und Wohnmobilstellplätze"][
                  "Öffnung und Zugang"
                ].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Camping- und Wohnmobilstellplätze
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Öffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[7][
                      "Camping- und Wohnmobilstellplätze"
                    ]["Öffnung und Zugang"].text,
                }}
              ></Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Aufenthalt und Hygiene:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[7][
                      "Camping- und Wohnmobilstellplätze"
                    ]["Aufenthalt und Hygiene"].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[7]["Camping- und Wohnmobilstellplätze"][
              "Weitere Informationen"
            ] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[7][
                        "Camping- und Wohnmobilstellplätze"
                      ]["Weitere Informationen"],
                  }}
                ></Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.tourism[3]["Discotheken und Clubs"][
                  "Öffnung und Zugang"
                ].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Discotheken und Clubs
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Öffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[3]["Discotheken und Clubs"][
                      "Öffnung und Zugang"
                    ].text,
                }}
              ></Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Aufenthalt und Hygiene:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[3]["Discotheken und Clubs"][
                      "Aufenthalt und Hygiene"
                    ].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[3]["Discotheken und Clubs"][
              "Weitere Informationen"
            ] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[3]["Discotheken und Clubs"][
                        "Weitere Informationen"
                      ],
                  }}
                ></Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.general.Einreisebeschränkungen.ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Einreisebeschränkungen
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            dangerouslySetInnerHTML={{
              __html: props.content.general.Einreisebeschränkungen.text,
            }}
          ></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(props.content.general.Einzelhandel.ampel),
            }}
          ></span>
          <Typography className={classes.heading}>Einzelhandel</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            dangerouslySetInnerHTML={{
              __html: props.content.general.Einzelhandel.text,
            }}
          ></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.tourism[5]["Ferienwohnungen und Ferienhäuser"][
                  "Öffnung und Zugang"
                ].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Ferienwohnungen und Ferienhäuser
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={5}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Öffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[5][
                      "Ferienwohnungen und Ferienhäuser"
                    ]["Öffnung und Zugang"].text,
                }}
              ></Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Aufenthalt und Hygiene:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[5][
                      "Ferienwohnungen und Ferienhäuser"
                    ]["Aufenthalt und Hygiene"].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[5]["Ferienwohnungen und Ferienhäuser"][
              "Weitere Informationen"
            ] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[5][
                        "Ferienwohnungen und Ferienhäuser"
                      ]["Weitere Informationen"],
                  }}
                ></Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.general["Fitness und Breitensport"].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Fitness und Breitensport
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            dangerouslySetInnerHTML={{
              __html: props.content.general["Fitness und Breitensport"].text,
            }}
          ></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.tourism[18].Freibäder["Öffnung und Zugang"].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>Freibäder</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Öffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[18].Freibäder["Öffnung und Zugang"]
                      .text,
                }}
              ></Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Aufenthalt und Hygiene:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[18].Freibäder[
                      "Aufenthalt und Hygiene"
                    ].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[18].Freibäder["Weitere Informationen"] !==
              "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[18].Freibäder[
                        "Weitere Informationen"
                      ],
                  }}
                ></Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.tourism[16]["Freizeitaktivitäten (indoor)"][
                  "Öffnung und Zugang"
                ].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Freizeitaktivitäten (indoor)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Öffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[16]["Freizeitaktivitäten (indoor)"][
                      "Öffnung und Zugang"
                    ].text,
                }}
              ></Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Aufenthalt und Hygiene:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[16]["Freizeitaktivitäten (indoor)"][
                      "Aufenthalt und Hygiene"
                    ].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[16]["Freizeitaktivitäten (indoor)"][
              "Weitere Informationen"
            ] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[16]["Freizeitaktivitäten (indoor)"][
                        "Weitere Informationen"
                      ],
                  }}
                ></Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.tourism[15]["Freizeitaktivitäten (outdoor)"][
                  "Öffnung und Zugang"
                ].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Freizeitaktivitäten (outdoor)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Öffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[15]["Freizeitaktivitäten (outdoor)"][
                      "Öffnung und Zugang"
                    ].text,
                }}
              ></Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Aufenthalt und Hygiene:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[15]["Freizeitaktivitäten (outdoor)"][
                      "Aufenthalt und Hygiene"
                    ].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[15]["Freizeitaktivitäten (outdoor)"][
              "Weitere Informationen"
            ] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[15][
                        "Freizeitaktivitäten (outdoor)"
                      ]["Weitere Informationen"],
                  }}
                ></Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.tourism[19].Freizeitbäder["Öffnung und Zugang"]
                  .ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>Freizeitbäder</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Öffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[19].Freizeitbäder[
                      "Öffnung und Zugang"
                    ].text,
                }}
              ></Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Aufenthalt und Hygiene:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[19].Freizeitbäder[
                      "Aufenthalt und Hygiene"
                    ].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[19].Freizeitbäder[
              "Weitere Informationen"
            ] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[19].Freizeitbäder[
                        "Weitere Informationen"
                      ],
                  }}
                ></Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.tourism[21].Freizeitparks["Öffnung und Zugang"]
                  .ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>Freizeitparks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Öffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[21].Freizeitparks[
                      "Öffnung und Zugang"
                    ].text,
                }}
              ></Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Aufenthalt und Hygiene:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[21].Freizeitparks[
                      "Aufenthalt und Hygiene"
                    ].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[21].Freizeitparks[
              "Weitere Informationen"
            ] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[21].Freizeitparks[
                        "Weitere Informationen"
                      ],
                  }}
                ></Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.tourism[17]["Geführte Touren und Aktivitäten"][
                  "Öffnung und Zugang"
                ].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Geführte Touren und Aktivitäten
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Öffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[17][
                      "Geführte Touren und Aktivitäten"
                    ]["Öffnung und Zugang"].text,
                }}
              ></Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Aufenthalt und Hygiene:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[17][
                      "Geführte Touren und Aktivitäten"
                    ]["Aufenthalt und Hygiene"].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[17]["Geführte Touren und Aktivitäten"][
              "Weitere Informationen"
            ] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[17][
                        "Geführte Touren und Aktivitäten"
                      ]["Weitere Informationen"],
                  }}
                ></Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(props.content.general.Gottesdienste.ampel),
            }}
          ></span>
          <Typography className={classes.heading}>Gottesdienste</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            dangerouslySetInnerHTML={{
              __html: props.content.general.Gottesdienste.text,
            }}
          ></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.tourism[11][
                  "Großveranstaltungen und Events (Kultur und Sport)"
                ]["Öffnung und Zugang"].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Großveranstaltungen und Events (Kultur und Sport)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Öffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[11][
                      "Großveranstaltungen und Events (Kultur und Sport)"
                    ]["Öffnung und Zugang"].text,
                }}
              ></Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Aufenthalt und Hygiene:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[11][
                      "Großveranstaltungen und Events (Kultur und Sport)"
                    ]["Aufenthalt und Hygiene"].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[11][
              "Großveranstaltungen und Events (Kultur und Sport)"
            ]["Weitere Informationen"] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[11][
                        "Großveranstaltungen und Events (Kultur und Sport)"
                      ]["Weitere Informationen"],
                  }}
                ></Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.tourism[4]["Hotels, Pensionen, Jugendherbergen"][
                  "Öffnung und Zugang"
                ].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Hotels, Pensionen, Jugendherbergen
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Öffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[4][
                      "Hotels, Pensionen, Jugendherbergen"
                    ]["Öffnung und Zugang"].text,
                }}
              ></Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Aufenthalt und Hygiene:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[4][
                      "Hotels, Pensionen, Jugendherbergen"
                    ]["Aufenthalt und Hygiene"].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[4]["Hotels, Pensionen, Jugendherbergen"][
              "Weitere Informationen"
            ] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[4][
                        "Hotels, Pensionen, Jugendherbergen"
                      ]["Weitere Informationen"],
                  }}
                ></Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.general["Hygieneregeln / Landesverordnungen"]
                  .ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Hygieneregeln / Landesverordnungen
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            dangerouslySetInnerHTML={{
              __html:
                props.content.general["Hygieneregeln / Landesverordnungen"]
                  .text,
            }}
          ></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.tourism[24].Kinos["Öffnung und Zugang"].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>Kinos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Öffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[24].Kinos["Öffnung und Zugang"].text,
                }}
              ></Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Aufenthalt und Hygiene:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[24].Kinos["Aufenthalt und Hygiene"]
                      .text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[24].Kinos["Weitere Informationen"] !==
              "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[24].Kinos["Weitere Informationen"],
                  }}
                ></Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.tourism[14]["Kleinkunst und Kultur"][
                  "Öffnung und Zugang"
                ].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Kleinkunst und Kultur
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Öffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[14]["Kleinkunst und Kultur"][
                      "Öffnung und Zugang"
                    ].text,
                }}
              ></Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Aufenthalt und Hygiene:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[14]["Kleinkunst und Kultur"][
                      "Aufenthalt und Hygiene"
                    ].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[14]["Kleinkunst und Kultur"][
              "Weitere Informationen"
            ] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[14]["Kleinkunst und Kultur"][
                        "Weitere Informationen"
                      ],
                  }}
                ></Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.general.Kontaktbeschränkungen.ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Kontaktbeschränkungen
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            dangerouslySetInnerHTML={{
              __html: props.content.general.Kontaktbeschränkungen.text,
            }}
          ></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.tourism[12]["Messen und Kongresse (öffentlich)"][
                  "Öffnung und Zugang"
                ].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Messen und Kongresse (öffentlich)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Öffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[12][
                      "Messen und Kongresse (öffentlich)"
                    ]["Öffnung und Zugang"].text,
                }}
              ></Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Aufenthalt und Hygiene:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[12][
                      "Messen und Kongresse (öffentlich)"
                    ]["Aufenthalt und Hygiene"].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[12]["Messen und Kongresse (öffentlich)"][
              "Weitere Informationen"
            ] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[12][
                        "Messen und Kongresse (öffentlich)"
                      ]["Weitere Informationen"],
                  }}
                ></Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.tourism[23]["Museen und Ausstellungen"][
                  "Öffnung und Zugang"
                ].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Museen und Ausstellungen
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Öffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[23]["Museen und Ausstellungen"][
                      "Öffnung und Zugang"
                    ].text,
                }}
              ></Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Aufenthalt und Hygiene:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[23]["Museen und Ausstellungen"][
                      "Aufenthalt und Hygiene"
                    ].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[23]["Museen und Ausstellungen"][
              "Weitere Informationen"
            ] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[23]["Museen und Ausstellungen"][
                        "Weitere Informationen"
                      ],
                  }}
                ></Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.general[
                  "Private Hochzeits-, Geburtstags- oder sonstige Familienfeiern"
                ].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Private Hochzeits-, Geburtstags- oder sonstige Familienfeiern
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            dangerouslySetInnerHTML={{
              __html:
                props.content.general[
                  "Private Hochzeits-, Geburtstags- oder sonstige Familienfeiern"
                ].text,
            }}
          ></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.tourism[6].Privatunterkünfte["Öffnung und Zugang"]
                  .ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>Privatunterkünfte</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Öffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[6].Privatunterkünfte[
                      "Öffnung und Zugang"
                    ].text,
                }}
              ></Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Aufenthalt und Hygiene:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[6].Privatunterkünfte[
                      "Aufenthalt und Hygiene"
                    ].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[6].Privatunterkünfte[
              "Weitere Informationen"
            ] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[6].Privatunterkünfte[
                        "Weitere Informationen"
                      ],
                  }}
                ></Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.tourism[0][
                  "Restaurants, Cafés und Gaststätten (indoor)"
                ]["Öffnung und Zugang"].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Restaurants, Cafés und Gaststätten (indoor)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Öffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[0][
                      "Restaurants, Cafés und Gaststätten (indoor)"
                    ]["Öffnung und Zugang"].text,
                }}
              ></Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Aufenthalt und Hygiene:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[0][
                      "Restaurants, Cafés und Gaststätten (indoor)"
                    ]["Aufenthalt und Hygiene"].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[0][
              "Restaurants, Cafés und Gaststätten (indoor)"
            ]["Weitere Informationen"] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[0][
                        "Restaurants, Cafés und Gaststätten (indoor)"
                      ]["Weitere Informationen"],
                  }}
                ></Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.tourism[13][
                  "Tagungen und Meetings (geschlossener Teilnehmerkreis)"
                ]["Öffnung und Zugang"].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Tagungen und Meetings (geschlossener Teilnehmerkreis)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Öffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[13][
                      "Tagungen und Meetings (geschlossener Teilnehmerkreis)"
                    ]["Öffnung und Zugang"].text,
                }}
              ></Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Aufenthalt und Hygiene:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[13][
                      "Tagungen und Meetings (geschlossener Teilnehmerkreis)"
                    ]["Aufenthalt und Hygiene"].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[13][
              "Tagungen und Meetings (geschlossener Teilnehmerkreis)"
            ]["Weitere Informationen"] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[13][
                        "Tagungen und Meetings (geschlossener Teilnehmerkreis)"
                      ]["Weitere Informationen"],
                  }}
                ></Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.tourism[22]["Theater und Oper"][
                  "Öffnung und Zugang"
                ].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>Theater und Oper</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Öffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[22]["Theater und Oper"][
                      "Öffnung und Zugang"
                    ].text,
                }}
              ></Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Aufenthalt und Hygiene:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[22]["Theater und Oper"][
                      "Aufenthalt und Hygiene"
                    ].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[22]["Theater und Oper"][
              "Weitere Informationen"
            ] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[22]["Theater und Oper"][
                        "Weitere Informationen"
                      ],
                  }}
                ></Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.tourism[8][
                  "Verkehr (inkl. Binnenschifffahrt und Seilbahn)"
                ]["Öffnung und Zugang"].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Verkehr (inkl. Binnenschifffahrt und Seilbahn)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Öffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[8][
                      "Verkehr (inkl. Binnenschifffahrt und Seilbahn)"
                    ]["Öffnung und Zugang"].text,
                }}
              ></Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Aufenthalt und Hygiene:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[8][
                      "Verkehr (inkl. Binnenschifffahrt und Seilbahn)"
                    ]["Aufenthalt und Hygiene"].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[8][
              "Verkehr (inkl. Binnenschifffahrt und Seilbahn)"
            ]["Weitere Informationen"] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[8][
                        "Verkehr (inkl. Binnenschifffahrt und Seilbahn)"
                      ]["Weitere Informationen"],
                  }}
                ></Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.general["Wellness, Kosmetik und Körperpflege"]
                  .ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Wellness, Kosmetik und Körperpflege
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            dangerouslySetInnerHTML={{
              __html:
                props.content.general["Wellness, Kosmetik und Körperpflege"]
                  .text,
            }}
          ></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span
            className={classes.dot}
            style={{
              backgroundColor: ampel(
                props.content.tourism[20][
                  "Zoos / Tierparks / Botanische Gärten"
                ]["Öffnung und Zugang"].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Zoos / Tierparks / Botanische Gärten
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Öffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[20][
                      "Zoos / Tierparks / Botanische Gärten"
                    ]["Öffnung und Zugang"].text,
                }}
              ></Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>Aufenthalt und Hygiene:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[20][
                      "Zoos / Tierparks / Botanische Gärten"
                    ]["Aufenthalt und Hygiene"].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[20]["Zoos / Tierparks / Botanische Gärten"][
              "Weitere Informationen"
            ] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[20][
                        "Zoos / Tierparks / Botanische Gärten"
                      ]["Weitere Informationen"],
                  }}
                ></Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default withStyles(styles)(AmpelAccordion);
