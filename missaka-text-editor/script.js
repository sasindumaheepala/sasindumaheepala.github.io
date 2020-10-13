function placeCaretAtEnd(el) {
	el.focus();
	if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
		var range = document.createRange();
		range.selectNodeContents(el);
		range.collapse(false);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
	} else if (typeof document.body.createTextRange != "undefined") {
		var textRange = document.body.createTextRange();
		textRange.moveToElementText(el);
		textRange.collapse(false);
		textRange.select();
	}
}
placeCaretAtEnd(document.querySelector('#text'));
var getCaret = function() {
	$('#caret').html(getCaretPosition(this));
	console.log($("#caret").html());
};
$('#text').on("mousedown mouseup keydown keyup", getCaret);

function placeCaret(caret) {
	var node = document.querySelector("#text");
	node.focus();
	var textNode = node.firstChild;
	var range = document.createRange();
	range.setStart(textNode, caret);
	range.setEnd(textNode, caret);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}

function getCaretPosition(editableDiv) {
	var caretPos = 0,
		sel, range;
	if (window.getSelection) {
		sel = window.getSelection();
		if (sel.rangeCount) {
			range = sel.getRangeAt(0);
			if (range.commonAncestorContainer.parentNode == editableDiv) {
				caretPos = range.endOffset;
			}
		}
	} else if (document.selection && document.selection.createRange) {
		range = document.selection.createRange();
		if (range.parentElement() == editableDiv) {
			var tempEl = document.createElement("span");
			editableDiv.insertBefore(tempEl, editableDiv.firstChild);
			var tempRange = range.duplicate();
			tempRange.moveToElementText(tempEl);
			tempRange.setEndPoint("EndToEnd", range);
			caretPos = tempRange.text.length;
		}
	}
	return caretPos;
}
getCaret
var down = false;
var downCaret = Number($("#caret").html());
$("#text").keydown(function() {
	getCaret
	downCaret = Number($("#caret").html());
	down = true;
	$.ajax({
		method: "POST",
		url: "post.php",
		data: {
			content: $("#text").html()
		}
	}).done(function(html) {
		console.log(html);
	});
});
$("#text").keyup(function() {
	down = false;
	$.ajax({
		method: "POST",
		url: "post.php",
		data: {
			content: $("#text").html()
		}
	}).done(function(html) {
		console.log(html);
	});
});
window.onload = setInterval(function() {
	getCaret
	if (!down) {
		$.ajax({
			url: "log.html",
			cache: false,
			success: function(html) {
				if (html != $("#text").html()) {
					console.log("Difference!");
					if (html.length > $("#text").html().length) {
						if (html.includes($("#text").html())) {
							var html = html.replace($("#text").html(), "");
							$("#text").html($("#text").html() + html);
							console.log("... + " + html);
						} else {
							$("#text").html(html);
							console.log(html);
						}
					} else {
						$("#text").html(html);
						console.log(html);
					}
				}
			},
		});
	}
	placeCaretAtEnd(document.querySelector('#text'));
	if (Number($("#caret").html()) > 0) {
		placeCaret(Number($("#caret").html()));
		placeCaret(Number($("#caret").html()) + 1);
		console.log($("#caret").html())
	}
}, 1000);