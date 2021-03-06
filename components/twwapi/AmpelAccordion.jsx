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
                props.content.tourism[10].Airports["??ffnung und Zugang"].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Airports / Flugh??fen
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>??ffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[10].Airports["??ffnung und Zugang"]
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
                  "??ffnung und Zugang"
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
                <strong>??ffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[2]["Bars, Pubs und Kneipen"][
                      "??ffnung und Zugang"
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
                props.content.tourism[1]["Bierg??rten und Au??engastronomie"][
                  "??ffnung und Zugang"
                ].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Bierg??rten und Au??engastronomie
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>??ffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[1]["Bierg??rten und Au??engastronomie"][
                      "??ffnung und Zugang"
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
                    props.content.tourism[1]["Bierg??rten und Au??engastronomie"][
                      "Aufenthalt und Hygiene"
                    ].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[1]["Bierg??rten und Au??engastronomie"][
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
                        "Bierg??rten und Au??engastronomie"
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
                props.content.tourism[9].Busreisen["??ffnung und Zugang"].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>Busreisen</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>??ffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[9].Busreisen["??ffnung und Zugang"]
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
                props.content.tourism[7]["Camping- und Wohnmobilstellpl??tze"][
                  "??ffnung und Zugang"
                ].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Camping- und Wohnmobilstellpl??tze
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>??ffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[7][
                      "Camping- und Wohnmobilstellpl??tze"
                    ]["??ffnung und Zugang"].text,
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
                      "Camping- und Wohnmobilstellpl??tze"
                    ]["Aufenthalt und Hygiene"].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[7]["Camping- und Wohnmobilstellpl??tze"][
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
                        "Camping- und Wohnmobilstellpl??tze"
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
                  "??ffnung und Zugang"
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
                <strong>??ffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[3]["Discotheken und Clubs"][
                      "??ffnung und Zugang"
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
                props.content.general.Einreisebeschr??nkungen.ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Einreisebeschr??nkungen
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            dangerouslySetInnerHTML={{
              __html: props.content.general.Einreisebeschr??nkungen.text,
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
                props.content.tourism[5]["Ferienwohnungen und Ferienh??user"][
                  "??ffnung und Zugang"
                ].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Ferienwohnungen und Ferienh??user
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={5}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>??ffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[5][
                      "Ferienwohnungen und Ferienh??user"
                    ]["??ffnung und Zugang"].text,
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
                      "Ferienwohnungen und Ferienh??user"
                    ]["Aufenthalt und Hygiene"].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[5]["Ferienwohnungen und Ferienh??user"][
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
                        "Ferienwohnungen und Ferienh??user"
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
                props.content.tourism[18].Freib??der["??ffnung und Zugang"].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>Freib??der</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>??ffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[18].Freib??der["??ffnung und Zugang"]
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
                    props.content.tourism[18].Freib??der[
                      "Aufenthalt und Hygiene"
                    ].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[18].Freib??der["Weitere Informationen"] !==
              "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[18].Freib??der[
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
                props.content.tourism[16]["Freizeitaktivit??ten (indoor)"][
                  "??ffnung und Zugang"
                ].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Freizeitaktivit??ten (indoor)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>??ffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[16]["Freizeitaktivit??ten (indoor)"][
                      "??ffnung und Zugang"
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
                    props.content.tourism[16]["Freizeitaktivit??ten (indoor)"][
                      "Aufenthalt und Hygiene"
                    ].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[16]["Freizeitaktivit??ten (indoor)"][
              "Weitere Informationen"
            ] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[16]["Freizeitaktivit??ten (indoor)"][
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
                props.content.tourism[15]["Freizeitaktivit??ten (outdoor)"][
                  "??ffnung und Zugang"
                ].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Freizeitaktivit??ten (outdoor)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>??ffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[15]["Freizeitaktivit??ten (outdoor)"][
                      "??ffnung und Zugang"
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
                    props.content.tourism[15]["Freizeitaktivit??ten (outdoor)"][
                      "Aufenthalt und Hygiene"
                    ].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[15]["Freizeitaktivit??ten (outdoor)"][
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
                        "Freizeitaktivit??ten (outdoor)"
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
                props.content.tourism[19].Freizeitb??der["??ffnung und Zugang"]
                  .ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>Freizeitb??der</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>??ffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[19].Freizeitb??der[
                      "??ffnung und Zugang"
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
                    props.content.tourism[19].Freizeitb??der[
                      "Aufenthalt und Hygiene"
                    ].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[19].Freizeitb??der[
              "Weitere Informationen"
            ] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[19].Freizeitb??der[
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
                props.content.tourism[21].Freizeitparks["??ffnung und Zugang"]
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
                <strong>??ffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[21].Freizeitparks[
                      "??ffnung und Zugang"
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
                props.content.tourism[17]["Gef??hrte Touren und Aktivit??ten"][
                  "??ffnung und Zugang"
                ].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Gef??hrte Touren und Aktivit??ten
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>??ffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[17][
                      "Gef??hrte Touren und Aktivit??ten"
                    ]["??ffnung und Zugang"].text,
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
                      "Gef??hrte Touren und Aktivit??ten"
                    ]["Aufenthalt und Hygiene"].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[17]["Gef??hrte Touren und Aktivit??ten"][
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
                        "Gef??hrte Touren und Aktivit??ten"
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
                  "Gro??veranstaltungen und Events (Kultur und Sport)"
                ]["??ffnung und Zugang"].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Gro??veranstaltungen und Events (Kultur und Sport)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>??ffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[11][
                      "Gro??veranstaltungen und Events (Kultur und Sport)"
                    ]["??ffnung und Zugang"].text,
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
                      "Gro??veranstaltungen und Events (Kultur und Sport)"
                    ]["Aufenthalt und Hygiene"].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[11][
              "Gro??veranstaltungen und Events (Kultur und Sport)"
            ]["Weitere Informationen"] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[11][
                        "Gro??veranstaltungen und Events (Kultur und Sport)"
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
                  "??ffnung und Zugang"
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
                <strong>??ffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[4][
                      "Hotels, Pensionen, Jugendherbergen"
                    ]["??ffnung und Zugang"].text,
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
                props.content.tourism[24].Kinos["??ffnung und Zugang"].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>Kinos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>??ffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[24].Kinos["??ffnung und Zugang"].text,
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
                  "??ffnung und Zugang"
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
                <strong>??ffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[14]["Kleinkunst und Kultur"][
                      "??ffnung und Zugang"
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
                props.content.general.Kontaktbeschr??nkungen.ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Kontaktbeschr??nkungen
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            dangerouslySetInnerHTML={{
              __html: props.content.general.Kontaktbeschr??nkungen.text,
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
                props.content.tourism[12]["Messen und Kongresse (??ffentlich)"][
                  "??ffnung und Zugang"
                ].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Messen und Kongresse (??ffentlich)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>??ffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[12][
                      "Messen und Kongresse (??ffentlich)"
                    ]["??ffnung und Zugang"].text,
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
                      "Messen und Kongresse (??ffentlich)"
                    ]["Aufenthalt und Hygiene"].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[12]["Messen und Kongresse (??ffentlich)"][
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
                        "Messen und Kongresse (??ffentlich)"
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
                  "??ffnung und Zugang"
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
                <strong>??ffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[23]["Museen und Ausstellungen"][
                      "??ffnung und Zugang"
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
                props.content.tourism[6].Privatunterk??nfte["??ffnung und Zugang"]
                  .ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>Privatunterk??nfte</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>??ffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[6].Privatunterk??nfte[
                      "??ffnung und Zugang"
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
                    props.content.tourism[6].Privatunterk??nfte[
                      "Aufenthalt und Hygiene"
                    ].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[6].Privatunterk??nfte[
              "Weitere Informationen"
            ] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[6].Privatunterk??nfte[
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
                  "Restaurants, Caf??s und Gastst??tten (indoor)"
                ]["??ffnung und Zugang"].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Restaurants, Caf??s und Gastst??tten (indoor)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>??ffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[0][
                      "Restaurants, Caf??s und Gastst??tten (indoor)"
                    ]["??ffnung und Zugang"].text,
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
                      "Restaurants, Caf??s und Gastst??tten (indoor)"
                    ]["Aufenthalt und Hygiene"].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[0][
              "Restaurants, Caf??s und Gastst??tten (indoor)"
            ]["Weitere Informationen"] !== "" && (
              <Grid item sm={12} xs={12}>
                <Typography>
                  <strong>Weitere Informationen:</strong>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      props.content.tourism[0][
                        "Restaurants, Caf??s und Gastst??tten (indoor)"
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
                ]["??ffnung und Zugang"].ampel
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
                <strong>??ffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[13][
                      "Tagungen und Meetings (geschlossener Teilnehmerkreis)"
                    ]["??ffnung und Zugang"].text,
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
                  "??ffnung und Zugang"
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
                <strong>??ffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[22]["Theater und Oper"][
                      "??ffnung und Zugang"
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
                ]["??ffnung und Zugang"].ampel
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
                <strong>??ffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[8][
                      "Verkehr (inkl. Binnenschifffahrt und Seilbahn)"
                    ]["??ffnung und Zugang"].text,
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
                props.content.general["Wellness, Kosmetik und K??rperpflege"]
                  .ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Wellness, Kosmetik und K??rperpflege
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            dangerouslySetInnerHTML={{
              __html:
                props.content.general["Wellness, Kosmetik und K??rperpflege"]
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
                  "Zoos / Tierparks / Botanische G??rten"
                ]["??ffnung und Zugang"].ampel
              ),
            }}
          ></span>
          <Typography className={classes.heading}>
            Zoos / Tierparks / Botanische G??rten
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography>
                <strong>??ffnung und Zugang:</strong>
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html:
                    props.content.tourism[20][
                      "Zoos / Tierparks / Botanische G??rten"
                    ]["??ffnung und Zugang"].text,
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
                      "Zoos / Tierparks / Botanische G??rten"
                    ]["Aufenthalt und Hygiene"].text,
                }}
              ></Typography>
            </Grid>
            {props.content.tourism[20]["Zoos / Tierparks / Botanische G??rten"][
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
                        "Zoos / Tierparks / Botanische G??rten"
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
